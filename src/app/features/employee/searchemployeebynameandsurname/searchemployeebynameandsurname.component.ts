import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../model/Employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-searchemployeebynameandsurname',
  templateUrl: './searchemployeebynameandsurname.component.html',
  styleUrls: ['./searchemployeebynameandsurname.component.scss']
})
export class SearchemployeebynameandsurnameComponent {
  searchForm: FormGroup;
  employee: Employee | null = null;
  searchAttempted: boolean = false;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.searchForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required]
    });
  }

  onSearch() {
    this.searchAttempted = true;
    const prenom = this.searchForm.value.prenom;
    const nom = this.searchForm.value.nom;
    this.employeeService.getEmployeeByNameSurname(prenom, nom).subscribe(
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