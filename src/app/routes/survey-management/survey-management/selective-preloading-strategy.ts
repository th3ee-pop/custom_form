import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SelectivePreloadingStrategy implements PreloadingStrategy {
    preloadedModules: string;

    preload(route: Route, load: () => Observable<any>): Observable<any> {
        console.log(route);
        if (route.data && route.data['title']) {
            this.preloadedModules = route.data['title'];
            console.log(route.data);
            return load();
        } else {
            return Observable.of(null);
        }
    }
}
