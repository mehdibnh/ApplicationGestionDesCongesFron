import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReclamationRoutingModule } from './reclamation-routing.module';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';
import { ReclamationFormComponent } from './reclamationform/reclamationform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReclamationEditComponent } from './reclamationedit/reclamationedit.component';
import { ArchivedReclamationListComponent } from '../archived-reclamation-list/archived-reclamation-list.component'; 
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ReclamationListComponent,
    ReclamationFormComponent,
    ReclamationEditComponent,
    ArchivedReclamationListComponent
  ],
  imports: [
    CommonModule,
    ReclamationRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ReclamationModule { }
