import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class IndustrialService{
    public getIndustrialProjectsUrl;
    constructor(private http: Http){
        this.getIndustrialProjectsUrl = 'http://localhost:3000/industrial_projects';
    }

    getIndustrialProjects(): Observable<any> {
        return this.http.get(this.getIndustrialProjectsUrl)
        .map((res:Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}