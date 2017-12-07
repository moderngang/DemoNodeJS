import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AcademicService{
    public getAcdemicProjectsUrl;
    constructor(private http: Http){
        this.getAcdemicProjectsUrl = 'http://localhost:3000/academic_projects';
    }

    getAcdemicProjects(): Observable<any> {
        return this.http.get(this.getAcdemicProjectsUrl)
        .map((res:Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}