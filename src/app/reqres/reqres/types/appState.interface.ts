import { PersonStateInterface } from "src/app/go-rest/models/user.state.interface";
import { UserStateInterface } from "./user.state.interface";

export interface AppStateInterface {
    users?: UserStateInterface;
    persons? : PersonStateInterface
}