import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable ()
export class QualificationsService{
    public getQualificationsUrl;
    constructor(private http: Http){
        this.getQualificationsUrl = 'http://localhost:3000/qualifications'
    }

    getQualifications(): Observable<any>{
        return this.http.get(this.getQualificationsUrl)
        .map((res:Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'server error'));
    }
}