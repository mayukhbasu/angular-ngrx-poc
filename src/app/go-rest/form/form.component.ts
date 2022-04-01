import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PersonResponse } from '../models/response.user.interface';
import { FormService } from '../services/form.service';
import { createPersonAction, getPersons } from '../store/actions';
import { getPersonsSelector } from '../store/person.selector';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  myForm: FormGroup;
  genders:string[] = ['male', 'female', 'NA'];
  users$: Observable<PersonResponse[]>
  constructor(private formService: FormService, private store: Store) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
      gender: new FormControl('male', Validators.required),
      status: new FormControl(false)
    });
    this.users$ = this.store.pipe(select(getPersonsSelector))
  }

  onSubmit(): void {
    if(this.myForm.valid){
      let userRequest = {
        request: {
          name: this.myForm.controls.name.value,
          email: this.myForm.controls.email.value,
          gender: this.myForm.controls.gender.value,
          status: this.myForm.controls.status.value ? 'active': 'inactive'
        }
      }
      this.store.dispatch(createPersonAction(userRequest))
    }
    
  }

  getlatestData(){
    this.store.dispatch(getPersons());
  }
  
}
