import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CongeRoutingModule } from './conge-routing.module';
import { CongelistComponent } from './congelist/congelist.component';
import { CongedemandeComponent } from './congedemande/congedemande.component';
import { CongemodifierComponent } from './congemodifier/congemodifier.component';


@NgModule({
  declarations: [
    CongelistComponent,
    CongedemandeComponent,
    CongemodifierComponent
  ],
  imports: [
    CommonModule,
    CongeRoutingModule
  ]
})
export class CongeModule { }
