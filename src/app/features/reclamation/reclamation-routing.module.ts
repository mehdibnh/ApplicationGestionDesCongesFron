import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';
import { ReclamationFormComponent } from './reclamationform/reclamationform.component';
import { ArchivedReclamationListComponent } from '../archived-reclamation-list/archived-reclamation-list.component';

const routes: Routes = [
  { path: 'Liste', component: ReclamationListComponent },
  { path: 'Form', component: ReclamationFormComponent },
  { path: 'ArchivedListe', component: ArchivedReclamationListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationRoutingModule { }
