import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/create.user.interface';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  myForm: FormGroup;
  genders:string[] = ['male', 'female', 'NA'];
  constructor(private formService: FormService) { }

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
      let user: User = {
        name: this.myForm.controls.name.value,
        email: this.myForm.controls.email.value,
        gender: this.myForm.controls.gender.value,
        status: this.myForm.controls.status.value

      }
      this.formService.createUser(user).subscribe(data => {
        console.log(data);
      })
    }
  }

}
