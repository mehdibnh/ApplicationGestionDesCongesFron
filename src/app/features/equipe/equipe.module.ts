import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {MatButtonModule} from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { EquipeFormuleComponent } from './equipe-formule/equipe-formule.component';
import { EquipeRoutingModule } from './equipe-routing.module';
@NgModule({
  declarations: [
    
  
    EquipeFormuleComponent
  ],
  imports: [
    CommonModule,
    EquipeRoutingModule,
    FormsModule,
    
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    
    MatButtonModule,
    MatIconModule,
  ]
})
export class EquipeModule { }
