import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchEmployeeByIdComponent } from './searchemployeebyid/searchemployeebyid.component';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeFormComponent,
    SearchEmployeeByIdComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule

  
  ]
})
export class EmployeeModule { }
