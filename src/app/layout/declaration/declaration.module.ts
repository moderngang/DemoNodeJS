import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeclarationRoutingModule } from './declaration-routing.module';
import { DeclarationComponent } from './components/declaration.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        DeclarationRoutingModule,
        PageHeaderModule
    ],
    declarations: [DeclarationComponent]
})
export class DeclarationModule { }