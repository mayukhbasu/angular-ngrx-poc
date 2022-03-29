import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { PersonResponse } from "../models/response.user.interface";
import { FormService } from "../services/form.service";
import { createPersonAction, createPersonActionFailure, createPersonActionSuccess } from "../store/actions";

@Injectable()
export class PersonEffect{
    constructor(private actions$: Actions, private formService: FormService){}

    createUser$ = createEffect(() => 
        this.actions$.pipe(
            ofType(createPersonAction),
            switchMap(({request}) => {
                return this.formService.createUser(request).pipe(
                    map((createdPerson: PersonResponse) => {
                        return createPersonActionSuccess({createdPerson})
                    }),
                    catchError(() => {
                        return of(createPersonActionFailure())
                    })
                )
            })
        )
    )
}