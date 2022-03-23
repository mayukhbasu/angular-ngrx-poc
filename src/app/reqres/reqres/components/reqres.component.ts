import { Component, OnInit } from '@angular/core';
import { select, Store, StoreConfig } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { createUserAction } from '../store/actions';
import { isLoadingSelector, userSelector } from '../store/user.selector';
import { CreateUserSuccessInterface } from '../types/create.user.success.interface';
import { FormInputInterface } from '../types/form.input.interface';
import { UserStateInterface } from '../types/user.state.interface';

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
  isLoading$: Observable<boolean> | undefined;
  createduser$: Observable<CreateUserSuccessInterface> | undefined;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.initialValues();
  }

  initialValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.createduser$ = this.store.pipe(select(userSelector));
    console.log(this.isLoading$);
  }

  onSubmit(request:FormInputInterface) : void {
    let data = {
      request
    }
    this.store.dispatch(createUserAction(data));
  }

}
