import { Component } from '@angular/core';
import { DepartementModule } from '../../departement/models/departement/departement.module';
import { DepartementService } from '../../departement/services/departement.service';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-equipe-formule',
  standalone: true,
  imports: [NgbPaginationModule, NgIf, NgFor],
  templateUrl: './equipe-formule.component.html',
  styleUrls: ['./equipe-formule.component.scss']
})
export class EquipeFormuleComponent {
  departments:DepartementModule [] = [];

  constructor(private departmentService: DepartementService) { }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe(
      (data: DepartementModule[]) => {
        this.departments = data;
      },
      (error) => {
        console.error('Error fetching departments', error);
      }
    );
  }
}
