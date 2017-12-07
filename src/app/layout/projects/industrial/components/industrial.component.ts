import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { IndustrialModel } from '../models/industrial.model';
import { IndustrialService } from '../services/industrial.service';

@Component({
    selector: 'app-projects-industrial',
    templateUrl: '../templates/industrial.component.html',
    styleUrls: ['../styles/industrial.component.scss'],
    animations: [routerTransition()],
    providers: [IndustrialService]
})
export class IndustrialComponent implements OnInit {
    public industrialProjects: Array<IndustrialModel>;
    public p: number = 1;
    constructor(private _industrialService: IndustrialService){
        this.industrialProjects = new Array<IndustrialModel>();
    }

    ngOnInit(){
        this.getIndustrialProjects();
    }

    getIndustrialProjects(): void {
        this._industrialService.getIndustrialProjects().subscribe(
            result => {
                if(result){
                    console.log(result);
                    this.industrialProjects = result.data;
                }
            }
        );
    }
}