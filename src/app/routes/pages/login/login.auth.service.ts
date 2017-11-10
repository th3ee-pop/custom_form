/**
 * Created by th3ee on 11/7/17.
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Headers, Http, Response, RequestOptions, CookieXSRFStrategy} from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';


@Injectable()
export class LoginAuthService {
    constructor(private http: Http) {
    }
    private Url = 'http://59.110.52.133:9500/';
    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers});


    redirectUrl: String;
    creatAuthorizationHeader(headers: Headers) {
        headers.append('x-csrftoken', sessionStorage.getItem('TOKEN'));
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }

    loginObservable(Formval: object): Observable<any> {
        return this.http.post(this.Url + 'account/login/', JSON.stringify(Formval), this.options)
            .do((res: Response) => {
            sessionStorage.setItem('TOKEN', res.json().TOKEN);
            console.log(res.json().TOKEN);
            console.log(res);
            console.log(res.headers);
        })
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    logout(): Object {
        sessionStorage.removeItem('TOKEN');
        return ({'status': 'TOKEN_REMOVED'});
    }

    getUsers(): Observable<any> {
        let headers= new Headers();
        this.creatAuthorizationHeader(headers);
        console.log(headers);
        return this.http.get(this.Url + 'account/userlist/',
            {headers: headers})
            .do((res: Response) =>
            console.log(res)
            )
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
