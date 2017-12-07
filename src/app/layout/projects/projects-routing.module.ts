import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './components/projects.component';

const routes: Routes = [
    { 
        path: '', component: ProjectsComponent,
        children: [
            { path: 'industrial', loadChildren: './industrial/industrial.module#IndustrialModule' },
            { path: 'academic', loadChildren: './academic/academic.module#AcademicModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProjectsRoutingModule { }