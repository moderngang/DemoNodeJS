import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './components/projects.component';

@NgModule({
    imports: [
        CommonModule,
        PageHeaderModule,
        ProjectsRoutingModule
    ],
    declarations: [ProjectsComponent]
})

export class ProjectsModule {}
