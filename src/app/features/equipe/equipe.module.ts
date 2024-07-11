import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { EquipeRoutingModule } from './equipe-routing.module';

import { DepartementModule } from '../departement/departement.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    // Add components here if needed
  ],
  imports: [
    CommonModule,
    EquipeRoutingModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    NgbModalModule,
    TranslateModule // Import TranslateModule
  ]
})
export class EquipeModule { }
