import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { AcademicService } from '../services/academic.service';
import { AcademicModel } from '../models/academic.model';

@Component({
    selector: 'app-projects-academic',
    templateUrl: '../templates/academic.component.html',
    styleUrls: ['../styles/academic.component.scss'],
    animations: [routerTransition()],
    providers: [AcademicService]
})
export class AcademicComponent implements OnInit {
    public academicProjects: Array<AcademicModel>;
    public p: number = 1;
    customClass: string = 'customClass';
    constructor(private _academicService: AcademicService){
        this.academicProjects = new Array<AcademicModel>();
    }

    ngOnInit(){
        this.getAcademicProjects();
    }

    getAcademicProjects(): void {
        this._academicService.getAcdemicProjects().subscribe(
            result => {
                if(result){
                    console.log(result);
                    this.academicProjects = result.data;
                }
            }
        );
    }
}