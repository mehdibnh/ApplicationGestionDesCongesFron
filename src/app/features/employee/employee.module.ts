import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchEmployeeByIdComponent } from './searchemployeebyid/searchemployeebyid.component';
import { SearchemployeebynomComponent } from './searchemployeebynom/searchemployeebynom/searchemployeebynom.component';
import { SearchemployeebypostComponent } from './searchemployeebypost/searchemployeebypost.component';
import { SearchemployeebynameandsurnameComponent } from './searchemployeebynameandsurname/searchemployeebynameandsurname.component';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeFormComponent,
    SearchEmployeeByIdComponent,
    SearchemployeebynomComponent,
    SearchemployeebypostComponent,
    SearchemployeebynameandsurnameComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule

  
  ]
})
export class EmployeeModule { }
