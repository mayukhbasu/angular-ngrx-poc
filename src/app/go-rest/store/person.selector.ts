import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/reqres/reqres/types/appState.interface";
import { PersonStateInterface } from "../models/user.state.interface";

export const PersonFeatureSelector = createFeatureSelector<AppStateInterface, 
PersonStateInterface>('persons');

export const getPersonsSelector = createSelector(PersonFeatureSelector, (personState:PersonStateInterface) =>
    personState.getPersons
)


