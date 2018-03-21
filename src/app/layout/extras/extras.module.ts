import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtrasRoutingModule } from './extras-routing.module';
import { ExtrasComponent } from './components/extras.component';
import { PageHeaderModule } from './../../shared';
import { AccordionModule } from 'ngx-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        ExtrasRoutingModule,
        PageHeaderModule,
        AccordionModule.forRoot()
    ],
    declarations: [ExtrasComponent]
})
export class ExtrasModule { }