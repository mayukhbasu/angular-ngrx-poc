import { Action, createReducer, on } from "@ngrx/store";
import { UserStateInterface } from "../types/user.state.interface";
import { createFailureAction, createUserAction, createUserSuccessAction } from "./actions";

const initialState: UserStateInterface = {
    isSubmitting: false,
    createdUser: null,
    isLoading: false,
    error: null
}

const userReducer = createReducer(
    initialState,
    on(createUserAction, (state):UserStateInterface => ({
        ...state,
        isSubmitting: true,
        isLoading: true
    })),
    on(createUserSuccessAction, (state, action):UserStateInterface => ({
        ...state,
        isLoading: false,
        isSubmitting: false,
        createdUser: action.createdUser
    })),
    on(createFailureAction, (state): UserStateInterface => ({
        ...state,
        isLoading: false,
        isSubmitting: false,
        error: true
    }))
)

export function userReducers(state: UserStateInterface, action: Action){
    return userReducer(state, action);
}