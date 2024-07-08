import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EmployeeService } from '../../employee.service';
import { Employee } from '../../model/Employee.model';

@Component({
  selector: 'app-searchemployeebynom',
  templateUrl: './searchemployeebynom.component.html',
  styleUrls: ['./searchemployeebynom.component.scss']
})
export class SearchemployeebynomComponent {
 
    searchForm: FormGroup;
    searchResults: Employee | null = null;
  
    constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
      this.searchForm = this.fb.group({
        nom: ['', Validators.required]
      });
    }
  
    searchEmployeeByName(): void {
      const nom = this.searchForm.get('nom')?.value;
      this.employeeService.getEmployeeByName(nom).subscribe(data => {
        this.searchResults = data;
        console.log(data);
      }, error => {
        console.error('Error fetching employee by name:', error);
        this.searchResults = null; // Reset the search results if no employee is found
      });
    }
  }
  