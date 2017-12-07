import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
