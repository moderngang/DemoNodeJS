import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtrasRoutingModule } from './extras-routing.module';
import { ExtrasComponent } from './components/extras.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        ExtrasRoutingModule,
        PageHeaderModule
    ],
    declarations: [ExtrasComponent]
})
export class ExtrasModule { }