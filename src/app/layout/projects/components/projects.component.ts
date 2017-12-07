import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Router } from '@angular/router';

@Component({
    selector: 'app-projects',
    templateUrl: '../templates/projects.component.html',
    styleUrls: ['../styles/projects.component.scss'],
    animations: [routerTransition()]
})
export class ProjectsComponent implements OnInit {
    constructor(public router: Router){

    }

    ngOnInit(){
        if (this.router.url === '/projects') {
            this.router.navigate(['/projects/industrial']);
        }
    }
}