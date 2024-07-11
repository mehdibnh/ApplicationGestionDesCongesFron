import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipeComponent } from './equipe.component';
import { EquipeFormuleComponent } from './equipe-formule/equipe-formule.component';



const routes: Routes = [
    { path: '', component: EquipeComponent },
    {
      path:'formule', component : EquipeFormuleComponent
    },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipeRoutingModule { }
