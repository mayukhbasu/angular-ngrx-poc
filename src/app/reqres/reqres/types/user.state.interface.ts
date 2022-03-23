import { CreateUserSuccessInterface } from "./create.user.success.interface";

export interface UserStateInterface {
    isSubmitting: boolean;
    createdUser: CreateUserSuccessInterface | null;
    isLoading: boolean;
    error: boolean | null;
}