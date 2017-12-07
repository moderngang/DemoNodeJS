import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkillsetsComponent } from './components/skillsets.component';

const routes: Routes = [
    { path: '', component: SkillsetsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SkillsetsRoutingModule { }
