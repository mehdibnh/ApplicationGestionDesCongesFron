import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EventRoutingModule } from './event-routing.module';
import { EventListComponent } from './event-list/event-list.component';
import { EventFormComponent } from './event-form/event-form.component';

// Importation des modules Angular Material nécessaires
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; // Ajout du module pour le datepicker
import { MatSelectModule } from '@angular/material/select';

// Importation du module angular-calendar
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { EventSearchComponent } from './event-search/event-search.component';
import { EventUpdateComponent } from './event-update/event-update.component';

@NgModule({
  declarations: [
    EventListComponent,
    EventFormComponent,
    EventSearchComponent,
    EventUpdateComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule, // Ajout du module pour le datepicker
    MatSelectModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ]
})
export class EventModule { }
