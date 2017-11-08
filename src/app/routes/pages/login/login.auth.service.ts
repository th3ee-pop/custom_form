/**
 * Created by th3ee on 11/7/17.
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class LoginAuthService {
    isLoggedIn = false;

    redirectUrl: String;

    login(): Observable<boolean> {
        return Observable.of(true).delay(500).do(val => this.isLoggedIn = true);
    }

    logout(): void {
        this.isLoggedIn = false;
    }
}
