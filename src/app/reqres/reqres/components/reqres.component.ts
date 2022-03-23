import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from '../services/user.service';
import { createUserAction } from '../store/actions';
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
  constructor(private store: Store, private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(request:FormInputInterface) : void {
    let data = {
      request
    }
    this.store.dispatch(createUserAction(data))
    console.log(request);
    this.userService.createUser(request).subscribe(data => {
      console.log(data);
    })
  }

}
