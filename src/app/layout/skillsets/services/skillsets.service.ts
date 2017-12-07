import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable ()
export class SkillsetsService{
    public getSkillsetsUrl;
    constructor(private http: Http){
        this.getSkillsetsUrl = 'http://localhost:3000/skillsets';
    }

    getSkillsets(): Observable<any>{
        return this.http.get(this.getSkillsetsUrl)
        .map((res:Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'server error'));
    }
}