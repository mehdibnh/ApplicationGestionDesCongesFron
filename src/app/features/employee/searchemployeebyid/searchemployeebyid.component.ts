import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/Employee.model';

@Component({
  selector: 'app-search-employee-by-id',
  templateUrl: './searchemployeebyid.component.html',
  styleUrls: ['./searchemployeebyid.component.css']
})
export class SearchEmployeeByIdComponent {
  searchForm: FormGroup;
  employee?: Employee;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.searchForm = this.fb.group({
      idEmployee: ['', Validators.required]
    });
  }

  onSearch() {
    if (this.searchForm.valid) {
      const id = this.searchForm.value.idEmployee;
      this.employeeService.getEmployeeById(id).subscribe(
        employee => {
          this.employee = employee;
          console.log('Employee found:', employee);
        },
        error => {
          console.log('Employee not found');
         this.employee = undefined;
        }
      );
    } 
    else {
      console.log('Form is invalid');
    }
  }
}
