import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { QualificationsModel } from '../models/qualifications.model';
import { QualificationsService } from '../services/qualifications.service';

@Component({
    selector: 'app-qualifications',
    templateUrl: '../templates/qualifications.component.html',
    styleUrls: ['../styles/qualifications.component.scss'],
    animations: [routerTransition()],
    providers: [QualificationsService]
})

export class QualificationsComponent {
    public qualificationDetails: Array<QualificationsModel>;
    constructor(private _qualificationsService: QualificationsService){
        this.qualificationDetails = new Array<QualificationsModel>();
    }

    ngOnInit(){
        this.getQualifications();
    }

    getQualifications(): void {
        this._qualificationsService.getQualifications().subscribe( result => {
            if(result){
                this.qualificationDetails = result.data;
            }
        });
    }
}