import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../model/Employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-searchemployeebypost',
  templateUrl: './searchemployeebypost.component.html',
  styleUrls: ['./searchemployeebypost.component.scss']
})
export class SearchemployeebypostComponent {
  searchForm: FormGroup;
  employee: Employee | null = null;
  searchAttempted: boolean = false;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.searchForm = this.fb.group({
      role: ['', Validators.required]
    });
  }

  onSearch() {
    this.searchAttempted = true;
    const role = this.searchForm.value.role;
    this.employeeService.getEmployeeByPoste(role).subscribe(
      data => {
        this.employee = data;
        console.log(data);
      },
      error => {
        console.error('Error fetching employee:', error);
        this.employee = null;
      }
    );
  }
}