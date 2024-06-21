import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CongelistComponent } from './congelist/congelist.component';
import { CongedemandeComponent } from './congedemande/congedemande.component';
import { CongemodifierComponent } from './congemodifier/congemodifier.component';


const routes: Routes = [ 
  { path: '', component: CongelistComponent },
  { path: 'congemodifier', component: CongemodifierComponent },
  { path: 'congelist', component: CongelistComponent },
  { path: 'congedemande', component: CongedemandeComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CongeRoutingModule { }
