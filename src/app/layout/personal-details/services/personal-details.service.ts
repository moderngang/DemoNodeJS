import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PersonalDetailsService{
    public getPersonalDetailsUrl;
    constructor(private http: Http){
        this.getPersonalDetailsUrl = 'http://localhost:3000/personal-details';
    }

    getPersonalDetails(): Observable<any> {
        return this.http.get(this.getPersonalDetailsUrl)
        .map((res:Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}