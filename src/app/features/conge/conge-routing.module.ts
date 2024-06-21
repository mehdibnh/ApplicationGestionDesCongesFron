import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CongelistComponent } from './congelist/congelist.component';

const routes: Routes = [ 
  { path: '', component: CongelistComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CongeRoutingModule { }
