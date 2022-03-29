import { createAction, props } from "@ngrx/store";
import { Person } from "../models/create.user.interface";
import { PersonResponse} from "../models/response.user.interface";
import { ActionTypes } from "./actionTypes";

export const createPersonAction = createAction(ActionTypes.CREATE_PERSON, 
    props<{request: Person}>());
export const createPersonActionSuccess = createAction(ActionTypes.CREATE_PERSON_SUCCESS,
    props<{createdPerson: PersonResponse}>());
export const createPersonActionFailure = createAction(ActionTypes.CREATE_PERSON_FAILURE,
)