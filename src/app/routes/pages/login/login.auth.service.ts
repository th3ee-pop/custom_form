/**
 * Created by th3ee on 11/7/17.
 */
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Injector} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TokenService } from '../../../core/net/token/token.service';
import { Headers, Http, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';


@Injectable()
export class LoginAuthService {
    constructor(private http: HttpClient, private injector: Injector) {
    }
    private Url = 'http://59.110.52.133:9500/';
    private options = {
        headers: new HttpHeaders({'X-CSRFToken': localStorage.getItem('TOKEN')})
    };


    redirectUrl: String;
    createAuthorizationHeader(headers: Headers) {
        console.log(localStorage.getItem('TOKEN'));
        headers.append('X-CSRFToken', localStorage.getItem('TOKEN'));
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }

    loginObservable(Formval: object): Observable<any> {
        return this.http.post(this.Url + 'account/login/', JSON.stringify(Formval))
            .do((res: any) => {
            console.log(res);
            localStorage.setItem('TOKEN', res.TOKEN);
            localStorage.setItem('userID', '001');
            localStorage.setItem('userGroup', '1');
            localStorage.setItem('userProvince', '陕西');
           // console.log(res.TOKEN);
            console.log(res);
        })

            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    logout(): Object {
        localStorage.removeItem('TOKEN');
        localStorage.removeItem('userID');
        localStorage.removeItem('userGroup');
        localStorage.removeItem('userProvince');
        return ({'status': 'TOKEN_REMOVED'});
    }

    getUsers(): Observable<any> {
        const headers = new Headers();
        this.createAuthorizationHeader(headers);
        console.log(headers);
        return this.http.get(this.Url + 'account/userlist/', this.options)
            .do((res: Response) =>
            console.log(res)
            )
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    register(body): Observable<any> {
        console.log(body);
        return this.http.post(this.Url + 'account/register/', JSON.stringify(body))
            .do((res: Response) => console.log(res))
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }
}
