import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CongeRoutingModule } from './conge-routing.module';
import { CongelistComponent } from './congelist/congelist.component';


@NgModule({
  declarations: [
    CongelistComponent
  ],
  imports: [
    CommonModule,
    CongeRoutingModule
  ]
})
export class CongeModule { }
