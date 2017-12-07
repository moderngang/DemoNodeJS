import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalDetailsRoutingModule } from './personal-details-routing.module';
import { PersonalDetailsComponent } from './components/personal-details.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        PersonalDetailsRoutingModule,
        PageHeaderModule
    ],
    declarations: [PersonalDetailsComponent]
})
export class PersonalDetailsModule { }
