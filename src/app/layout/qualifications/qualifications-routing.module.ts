import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QualificationsComponent } from './components/qualifications.component';

const routes: Routes = [
    {path: '', component: QualificationsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class QualificationsRoutingModule {}