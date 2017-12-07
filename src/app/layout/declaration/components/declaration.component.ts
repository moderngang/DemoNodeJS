import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
//import { PersonalDetailsService } from '../services/personal-details.service';
//import { PersonalDetailsModel } from '../models/personal-details.model';

@Component({
    selector: 'app-declaration',
    templateUrl: '../templates/declaration.component.html',
    styleUrls: ['../styles/declaration.component.scss'],
    animations: [routerTransition()],
    //providers: [PersonalDetailsService]
})
export class DeclarationComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {

    }
    // public personalDetails: Array<PersonalDetailsModel>;

    // constructor(private _psersonalDetailsService: PersonalDetailsService) {
    //     this.personalDetails = new Array<PersonalDetailsModel>();
    //  }

    // ngOnInit() {
    //     this.getPersonalDetails();
    //  }

    //  getPersonalDetails(): void {
    //      this._psersonalDetailsService.getPersonalDetails().subscribe( result => {
    //         if(result){
    //             console.log(result);
    //             this.personalDetails = result.data;
    //         }
    //      });
    //  }
}
