import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'personal-details', loadChildren: './personal-details/personal-details.module#PersonalDetailsModule' },
            { path: 'qualifications', loadChildren: './qualifications/qualifications.module#QualificationsModule' },
            { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule' },
            { path: 'skillsets', loadChildren: './skillsets/skillsets.module#SkillsetsModule' },
            { path: 'extras', loadChildren: './extras/extras.module#ExtrasModule' },
            { path: 'declaration', loadChildren: './declaration/declaration.module#DeclarationModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
