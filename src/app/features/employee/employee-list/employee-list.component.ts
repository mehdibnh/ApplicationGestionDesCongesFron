import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employee } from '../model/Employee.model';
import { EmployeeService } from '../employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  listEmployees: Employee[] = [];
  showEmployees: boolean = false;
  editForm: FormGroup;
  editingEmployee: Employee | null = null;
  pollingSubscription: Subscription = new Subscription();

  constructor(private employeeService: EmployeeService, private fb: FormBuilder) {
    this.editForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      salaire: ['', Validators.required],
      password: ['', Validators.required],
      equipe: ['', Validators.required],
      email: ['', Validators.required],
      soldeConges: [0, [Validators.required, Validators.min(0)]],
      role: ['', Validators.required],
    });
  }

  ngOnInit() {
    
    this.getAllEmployees();

    // Polling every 10 seconds
    this.pollingSubscription = interval(5000).subscribe(() => {
      this.getAllEmployees();
    });
  }

  ngOnDestroy() {
    if (this.pollingSubscription) {
      this.pollingSubscription.unsubscribe();
    }
  }

  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe(data => {
      console.log(data);
      this.listEmployees = data;
      this.showEmployees = true;
    }, error => {
      console.error('Error fetching employees:', error);
     });
  }

  getEmployeeByName(nom: string): void {
    this.employeeService.getEmployeeByName(nom).subscribe(data => {
      console.log(data);
    });
  }

  getEmployeeById(id: number): void {
    this.employeeService.getEmployeeById(id).subscribe(data => {
      console.log(data);
    });
  }

  createEmployee(employee: Employee): void {
    this.employeeService.createEmployee(employee).subscribe(data => {
      console.log(data);
      this.getAllEmployees();
    });
  }

  editEmployee(employee: Employee): void {
    this.editingEmployee = employee;
    this.editForm.patchValue(employee);
  }

  updateEmployee(): void {
    if (this.editingEmployee) {
      const updatedEmployee = { ...this.editingEmployee, ...this.editForm.value };
      this.employeeService.updateEmployee(this.editingEmployee.idEmployee, updatedEmployee).subscribe(data => {
        console.log(data);
        this.getAllEmployees();
        this.cancelEdit();
      });
    }
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.listEmployees = this.listEmployees.filter(emp => emp.idEmployee !== id);
      this.getAllEmployees();
    });
  }

  cancelEdit(): void {
    this.editingEmployee = null;
    this.editForm.reset();
  }
}