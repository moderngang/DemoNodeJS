import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { PersonalDetailsService } from '../services/personal-details.service';
import { PersonalDetailsModel } from '../models/personal-details.model';

@Component({
    selector: 'app-personal-details',
    templateUrl: '../templates/personal-details.component.html',
    styleUrls: ['../styles/personal-details.component.scss'],
    animations: [routerTransition()],
    providers: [PersonalDetailsService]
})
export class PersonalDetailsComponent implements OnInit {
    public personalDetails: Array<PersonalDetailsModel>;

    constructor(private _psersonalDetailsService: PersonalDetailsService) {
        this.personalDetails = new Array<PersonalDetailsModel>();
     }

    ngOnInit() {
        this.getPersonalDetails();
     }

     getPersonalDetails(): void {
         this._psersonalDetailsService.getPersonalDetails().subscribe( result => {
            if(result){
                console.log(result);
                this.personalDetails = result.Data;
            }
         });
     }
}
