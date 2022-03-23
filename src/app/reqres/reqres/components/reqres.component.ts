import { Component, OnInit } from '@angular/core';
import { FormInputInterface } from '../types/form.input.interface';

@Component({
  selector: 'app-reqres',
  templateUrl: './reqres.component.html',
  styleUrls: ['./reqres.component.css']
})
export class ReqresComponent implements OnInit {

  formInput: FormInputInterface = {
    name: '',
    job: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formData:FormInputInterface) : void {
    console.log(formData);
  }

}
