import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { FormInputInterface } from "../types/form.input.interface";
import { Observable } from "rxjs";

import { CreateUserSuccessInterface } from "../types/create.user.success.interface";
import { environment } from "src/environments/environment";

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {}

    createUser(data: FormInputInterface): Observable<CreateUserSuccessInterface>{
        const url = environment.apiUrl + '/users';
        return this.http.post<CreateUserSuccessInterface>(url, data);
    }
} 