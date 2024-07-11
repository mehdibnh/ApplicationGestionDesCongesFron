import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementRoutingModule } from './departement-routing.module';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {MatButtonModule} from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { DepartementFormuleComponent } from './departement-formule/departement-formule.component';
@NgModule({
  declarations: [
    
  
    DepartementFormuleComponent
  ],
  imports: [
    CommonModule,
    DepartementRoutingModule,
    FormsModule,
    
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    
    MatButtonModule,
    MatIconModule,
  ]
})
export class DepartementModule { }
