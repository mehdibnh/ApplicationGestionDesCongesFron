import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/Employee.model';

@Component({
  selector: 'app-search-employee-by-id',
  templateUrl: './searchemployeebyid.component.html',
  styleUrls: ['./searchemployeebyid.component.scss']
})
export class SearchEmployeeByIdComponent {
  searchForm: FormGroup;
  employee: Employee | null = null;
  searchAttempted: boolean = false;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.searchForm = this.fb.group({
      idEmployee: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onSearch() {
    this.searchAttempted = true;
    const id = this.searchForm.value.idEmployee;
    this.employeeService.getEmployeeById(id).subscribe(
      data => {
        this.employee = data;
      },
      error => {
        console.error('Error fetching employee:', error);
        this.employee = null;
      }
    );
  }
}