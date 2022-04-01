import { PersonResponse } from "./response.user.interface";

export interface PersonStateInterface {
    isSubmitting: boolean;
    createdUser: PersonResponse | null;
    isLoading: boolean;
    error: boolean | null;
    getPersons: PersonResponse[] | null;
}