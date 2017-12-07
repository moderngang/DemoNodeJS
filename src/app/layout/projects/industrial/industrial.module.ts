import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../../shared';
import { IndustrialRoutingModule } from './industrial-routing.module';
import { IndustrialComponent } from './components/industrial.component';
import { AccordionModule } from 'ngx-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    imports: [
        CommonModule,
        PageHeaderModule,
        IndustrialRoutingModule,
        NgxPaginationModule,
        AccordionModule.forRoot()
    ],
    declarations: [IndustrialComponent]
})

export class IndustrialModule {}
