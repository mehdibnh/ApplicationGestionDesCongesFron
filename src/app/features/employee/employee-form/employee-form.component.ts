import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../model/Employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.employeeForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      salaire: ['', Validators.required],
      password: ['', Validators.required],
      equipe: ['', Validators.required],
      manager: ['', Validators.required],
      Role : ['', Validators.required],
      soldeConges: [0, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const newEmployee: Employee = this.employeeForm.value;
      console.log('Employee created:', newEmployee);
      // Here, you can call a service to save the employee, for example:
       this.employeeService.createEmployee(newEmployee).subscribe();
    } else {
      console.log('Form is invalid');
    }
  }
}
