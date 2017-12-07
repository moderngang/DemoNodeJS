import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../../shared';
import { AcademicRoutingModule } from './academic-routing.module';
import { AcademicComponent } from './components/academic.component';
import { AccordionModule } from 'ngx-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    imports: [
        CommonModule,
        PageHeaderModule,
        AcademicRoutingModule,
        NgxPaginationModule,
        AccordionModule.forRoot()
    ],
    declarations: [AcademicComponent]

})

export class AcademicModule {}
