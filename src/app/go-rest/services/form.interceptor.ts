import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

export class FormInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = environment.token;
        req = req.clone({
            setHeaders: { Authorization: `${token}` }
        })
        return next.handle(req);
    }

}