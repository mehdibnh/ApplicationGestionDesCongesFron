import { Component, OnInit , ViewChild} from '@angular/core';
import { DepartementService } from '../../departement/services/departement.service';
import { EquipeService } from '../services/equipe.service';
import { Employee } from '../../employee/model/Employee.model';
import { EmployeeService } from '../../employee/employee.service';
import { DepartementModule } from '../../departement/models/departement/departement.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModalModule, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import * as bootstrap from "bootstrap";
import * as $ from 'jquery';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationComponent } from 'src/app/shared/header/navigation.component';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'app-equipe-formule',
  standalone: true,
  imports: [NgbPaginationModule, NgIf, NgFor, FormsModule, NgbModalModule, CommonModule, FormsModule,TranslateModule,NavigationComponent],
  templateUrl: './equipe-formule.component.html',
  styleUrls: ['./equipe-formule.component.scss']
})
export class EquipeFormuleComponent implements OnInit {
  @ViewChild(NavigationComponent) navigationComponent!: NavigationComponent;
  nomEquipe: string = '';
  projet: string = '';
  nombrePersonnes: number | undefined;
  employeesByRole: Employee[] = [];
  employeesWithoutTeam: Employee[] = [];
  selectedTeamLead?: number; // ID of the selected team lead
  selectedTeamMembers: number[] = []; // IDs of the selected team members
  teamAdded: boolean = false;
  showAlert: boolean = false;
  showAlerte: boolean = false;
  teamId?: number; // ID of the newly created team
  departement?: string;
  managersWithoutTeam: Employee[] = [];
  membersWithoutTeam: Employee[] = [];
  

  constructor(
    private equipeService: EquipeService,
    private employeeService: EmployeeService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.getManagersWithoutTeam();
    this.getMembersWithoutTeam();
  }

  getManagersWithoutTeam(): void {
    this.employeeService.getManagersWithoutTeam().subscribe(
      (data: Employee[]) => {
        this.managersWithoutTeam = data;
      },
      error => {
        console.error('Error fetching managers without team', error);
      }
    );
  }

  getMembersWithoutTeam(): void {
    this.employeeService.getMembersWithoutTeam().subscribe(
      (data: Employee[]) => {
        this.membersWithoutTeam = data;
      },
      error => {
        console.error('Error fetching members without team', error);
      }
    );
  }

  onSubmit(): void {
    // Validation des champs de formulaire
    if (!this.nomEquipe || !this.nombrePersonnes || !this.departement || !this.projet) {
      alert("All fields are required!");
      return;
    }

    if (this.nombrePersonnes < 3 || this.nombrePersonnes > 20) {
      alert("Number of members must be between 3 and 20.");
      return;
    }

    const newEquipe: any = {
      nomEquipe: this.nomEquipe,
      nombrePersonnes: this.nombrePersonnes,
      departement: this.departement,
      projet: this.projet,
    };

    this.equipeService.ajouterEquipe(newEquipe).subscribe(
      (response) => {
        console.log('Nouvelle équipe ajoutée:', response);
        this.teamId = response.idEquipe;
        this.nombrePersonnes = response.nombrePersonnes;
        this.departement = response.departement;
        this.teamAdded = true;

        // Afficher l'alerte de succès
        this.showAlert = true;
        setTimeout(() => this.showAlert = false, 3000); // Masquer l'alerte après 3 secondes

        // Réinitialiser le formulaire
        this.nomEquipe = '';
        this.nombrePersonnes = undefined;
        this.departement = '';
        this.projet = '';
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de l\'équipe', error);
      }
    );
  }

  getEmployeesWithoutTeam(): void {
    this.employeeService.getEmployeesWithoutTeam().subscribe(
      (data: Employee[]) => {
        this.employeesWithoutTeam = data;
      },
      error => {
        console.error('Error fetching employees without team', error);
      }
    );
  }

  saveTeamDetails(): void {
    if (!this.teamId) {
      console.error('Team ID is not set.');
      return;
    }

    if (this.selectedTeamLead) {
      this.equipeService.assignTeamLeader(this.teamId, this.selectedTeamLead).subscribe(
        response => {
          console.log('Team lead assigned:', response);
        },
        error => {
          console.error('Error assigning team lead', error);
        }
      );
    }

    if (this.selectedTeamMembers.length > 0) {
      this.equipeService.addMembersToEquipe(this.teamId, this.selectedTeamMembers).subscribe(
        response => {
          console.log('Team members assigned:', response);
          // Afficher l'alerte de succès
        this.showAlerte = true;
        setTimeout(() => this.showAlerte = false, 3000); // Masquer l'alerte après 3 secondes

        },
        error => {
          console.error('Error assigning team members', error);
        }
      );
    }
  }

  openModel() {
    const modelDiv = document.getElementById('myModel');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }

  closeModel() {
    const modelDiv = document.getElementById('myModel');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }
  
}
