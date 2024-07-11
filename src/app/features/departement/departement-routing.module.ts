import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementComponent } from './departement.component';
import { DepartementFormuleComponent } from './departement-formule/departement-formule.component';


const routes: Routes = [
    { path: '', component: DepartementComponent },
    {
        path:'formule', component : DepartementFormuleComponent
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartementRoutingModule { }
