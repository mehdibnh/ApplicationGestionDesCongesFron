import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { SearchEmployeeByIdComponent } from './searchemployeebyid/searchemployeebyid.component';
import { SearchemployeebynomComponent } from './searchemployeebynom/searchemployeebynom/searchemployeebynom.component';
const routes: Routes = [
  {path: '',component: EmployeeListComponent},
  {path: 'add',component: EmployeeFormComponent},
  {path: 'edit/:id',component: EmployeeFormComponent},
{path : 'list', component: EmployeeListComponent},
{path : 'search', component: SearchEmployeeByIdComponent},
{path : 'searchByNom', component:SearchemployeebynomComponent }];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
