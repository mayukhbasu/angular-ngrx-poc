import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { createUserAction } from "../store/actions";
import {map, catchError, switchMap, tap} from 'rxjs/operators'

@Injectable()
export class UserEffect {

    constructor(private actions$: Actions){}

    // createUser$ = createEffect(() => 
    //     this.actions$.pipe(
    //         ofType(createUserAction),
    //         switchMap(({request}) => {
                
    //         })
    //     )
    // )
}