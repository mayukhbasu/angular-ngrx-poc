import { Action, createReducer, on } from "@ngrx/store";

import { PersonStateInterface } from "../models/user.state.interface";
import { createPersonAction, createPersonActionFailure, createPersonActionSuccess } from "./actions";


const initialState: PersonStateInterface = {
    isSubmitting: false,
    createdUser: null,
    isLoading: false,
    error: null
}

const personReducer = createReducer(
    initialState, on(createPersonAction, (state): PersonStateInterface => ({
        ...state,
        isSubmitting: true,
        isLoading: true
    })),
    on(createPersonActionSuccess, (state, action):PersonStateInterface => ({
        ...state,
        isSubmitting: false,
        isLoading: false,
        createdUser: action.createdPerson
    })),
    on(createPersonActionFailure, (state):PersonStateInterface => ({
        ...state,
        isSubmitting: false,
        isLoading: false,
    }))
)

export function personReducers(state: PersonStateInterface, action: Action){
    return personReducer(state, action);
}