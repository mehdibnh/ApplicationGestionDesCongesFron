import { Component } from '@angular/core';
import { Employee } from '../model/Employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  listEmployees: Employee[] = [];
  ngOnInit() {
    this.EmployeeService.getAllEmployees().subscribe(data => {
      console.log(data)
      this.listEmployees = data;});
  
  }
  
  constructor(private EmployeeService : EmployeeService) { 
  
  }

}
