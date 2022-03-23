import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { createFailureAction, createUserAction, createUserSuccessAction } from "../store/actions";
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import { UserService } from "../services/user.service";
import { CreateUserSuccessInterface } from "../types/create.user.success.interface";
import { HttpErrorResponse } from "@angular/common/http";
import { of } from "rxjs";

@Injectable()
export class UserEffect {

    constructor(private actions$: Actions, private userService: UserService){}

    createUser$ = createEffect(() => 
        this.actions$.pipe(
            ofType(createUserAction),
            switchMap(({request}) => {
                return this.userService.createUser(request).pipe(
                    map((createdUser: CreateUserSuccessInterface) => {
                        return createUserSuccessAction({createdUser})
                    }),
                    catchError(() => {
                        return of(createFailureAction());
                    })
                   
                )
                
            })
        )
    )
}