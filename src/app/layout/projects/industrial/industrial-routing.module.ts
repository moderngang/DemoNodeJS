import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndustrialComponent } from './components/industrial.component';

const routes: Routes = [
    { path: '', component: IndustrialComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndustrialRoutingModule { }
