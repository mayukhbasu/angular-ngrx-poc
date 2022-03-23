import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateInterface } from "../types/appState.interface";
import { UserStateInterface } from "../types/user.state.interface";

export const userFeatureSelector = createFeatureSelector<AppStateInterface,
UserStateInterface>('users');

export const userSelector = createSelector(userFeatureSelector, 
    (userState: UserStateInterface) => userState.createdUser);

export const isLoadingSelector = createSelector(userFeatureSelector, (userState: UserStateInterface) =>
    userState.isLoading
);