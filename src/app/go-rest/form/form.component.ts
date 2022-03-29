import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  myForm: FormGroup;
  genders:string[] = ['male', 'female', 'NA'];
  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      gender: new FormControl(),
      status: new FormControl()
    })
  }

}
