import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualificationsRoutingModule } from './qualifications-routing.module';
import { QualificationsComponent } from './components/qualifications.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        QualificationsRoutingModule,
        PageHeaderModule
    ],
    declarations: [QualificationsComponent]
})
export class QualificationsModule { }