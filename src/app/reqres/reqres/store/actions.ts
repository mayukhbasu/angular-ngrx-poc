import { createAction, props } from "@ngrx/store";
import { CreateUserSuccessInterface } from "../types/create.user.success.interface";
import { FormInputInterface } from "../types/form.input.interface";
import { ActionTypes } from "./actionTypes";

export const createUserAction = createAction(ActionTypes.CREATE_USER,
    props<{request: FormInputInterface}>());

export const createUserSuccessAction = createAction(ActionTypes.CREATE_USER_SUCCESS,
    props<{createdUser: CreateUserSuccessInterface}>());

export const createFailureAction = createAction(ActionTypes.CREATE_USER_FAILURE);

export const getUsersAction = createAction(ActionTypes.GET_USER);
export const getUsersActionSuccess = createAction(ActionTypes.CREATE_USER_SUCCESS);
export const getUsersActionFailure = createAction(ActionTypes.CREATE_USER_FAILURE);