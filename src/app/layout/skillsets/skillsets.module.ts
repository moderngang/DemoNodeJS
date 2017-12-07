import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsetsRoutingModule } from './skillsets-routing.module';
import { SkillsetsComponent } from './components/skillsets.component';
import { PageHeaderModule } from './../../shared';
import { AccordionModule } from 'ngx-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        SkillsetsRoutingModule,
        PageHeaderModule,
        AccordionModule.forRoot()
    ],
    declarations: [SkillsetsComponent]
})
export class SkillsetsModule { }