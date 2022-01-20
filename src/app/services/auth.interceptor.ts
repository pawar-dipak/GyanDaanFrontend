import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";




@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private login:LoginService){}
    
    
    intercept(req: HttpRequest<any>,
         next: HttpHandler):
          Observable<HttpEvent<any>> {
            
        //add Jwt token from llocal storage to request header
        let token = this.login.getToken();
       // const Authorization = "Bearer "+token;
       // console.log(Authorization);
        console.log("Inside Intercepor")//for debuging
        const headers= new HttpHeaders()
            .set('authorizarion','Bearer '+token)
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*');
        if(token != null){
         //  req.headers.append("authorization",'Bearer '+token);
            req = req.clone({setHeaders:{'authorization':'Bearer '+token,'Access-Control-Allow-Origin': '*','content-type': 'application/json'}});
            console.log(req);
            console.log(req.headers.get("authorization"));//debug

        }
        console.log(req.urlWithParams);
        return next.handle(req);
    }
     

    

}

export const authInterceptorProvider=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true,
    },
];