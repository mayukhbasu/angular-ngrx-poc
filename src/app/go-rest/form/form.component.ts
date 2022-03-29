import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FormService } from '../services/form.service';
import { createPersonAction } from '../store/actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  myForm: FormGroup;
  genders:string[] = ['male', 'female', 'NA'];
  constructor(private formService: FormService, private store: Store) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
      gender: new FormControl('male', Validators.required),
      status: new FormControl(false)
    })
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

}
