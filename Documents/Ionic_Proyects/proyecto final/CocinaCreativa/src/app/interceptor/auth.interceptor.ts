import { Injectable } from "@angular/core";
import {
HttpErrorResponse,
HttpEvent,
HttpHandler,
HttpInterceptor,
HttpRequest,
HttpResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Router } from "@angular/router";
import { catchError, finalize, map } from "rxjs/operators";
import { LoadingService } from "../services/loading.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
 
    constructor(private readonly loading: LoadingService){}

    

    intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {       
       this.loading.show()       
        return next.handle(req).pipe(
            finalize(()=> { 
                this.loading.hide()               
            })
        )
    }
}