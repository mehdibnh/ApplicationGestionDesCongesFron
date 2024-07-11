import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartementModule } from 'src/app/features/departement/models/departement/departement.module';
import { Employee } from 'src/app/features/employee/model/Employee.model';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EquipeModule {
  idEquipe?: number;
  nomEquipe?: string;
  nombrePersonnes?: number;
  projet?: string;
  departement?: string;
  employees?: Employee[];
  teamLeader?: Employee;
}
