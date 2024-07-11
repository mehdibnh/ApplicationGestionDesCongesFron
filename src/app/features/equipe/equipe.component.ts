import { Component, OnInit ,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EquipeService } from './services/equipe.service';
import { EmployeeService } from '../employee/employee.service';
import { EquipeModule } from './models/equipe/equipe.module';
import { NgIf, NgFor } from '@angular/common';
import { NgbModal, NgbModalModule, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from 'src/app/shared/header/navigation.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-equipe',
  standalone: true,
  imports: [ NgIf, NgFor , NgbModalModule ,CommonModule , FormsModule , NavigationComponent , TranslateModule ],
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {
  @ViewChild(NavigationComponent) navigationComponent!: NavigationComponent;

  equipes: EquipeModule[] = [];
  selectedEquipe: EquipeModule | undefined;
  selectedEquipes: EquipeModule = new EquipeModule();
  isUpdateModalVisible = false;
  nomEquipeToUpdate: string = '';
  nombrePersonnesToUpdate: number | undefined;
  departementToUpdate: string = '';
  projetToUpdate: string = '';

  constructor(private router: Router, private equipeService: EquipeService , private employeService : EmployeeService) { }

  ngOnInit(): void {
    this.recupererListeEquipe();
  }

  recupererListeEquipe(): void {
    this.equipeService.recupererListeEquipe().subscribe(
      (data: EquipeModule[]) => {
        this.equipes = data;
        console.log('Liste des équipes:', this.equipes);
      },
      error => {
        console.error('Erreur lors de la récupération des équipes', error);
      }
    );
  }
  
  navigateToForm(): void {
    this.router.navigate(['/equipe/formule']);
  }

  confirmDeleteEquipe(equipe: EquipeModule): void {
    this.selectedEquipe = equipe;
    $('#deleteConfirmationModal').modal('show');
  }

  deleteEquipe(): void {
    if (this.selectedEquipe && this.selectedEquipe.idEquipe) { // Vérifiez si selectedEquipe et son id sont définis
      const equipeId = this.selectedEquipe.idEquipe;
      this.employeService.desaffecterEmployeesByEquipeId(equipeId).subscribe(
        response => {
          console.log('Désaffectation réussie:', response);
          this.equipeService.deleteEquipe(equipeId).subscribe(
            () => {
              console.log('Équipe supprimée avec succès.');
              this.recupererListeEquipe();
            },
            error => {
              console.error('Erreur lors de la suppression de l\'équipe:', error);
            }
          );
        },
        error => {
          console.error('Erreur lors de la désaffectation des employés:', error);
        }
      );
    }
    $('#deleteConfirmationModal').modal('hide');
  }

  openUpdateModal(equipe: EquipeModule): void {
    this.selectedEquipes = { ...equipe };  // Crée une copie de l'objet equipe pour éviter les modifications directes

    // Pré-remplir les champs du formulaire avec les valeurs actuelles de selectedEquipe
    this.nomEquipeToUpdate = this.selectedEquipes.nomEquipe || '';
    this.nombrePersonnesToUpdate = this.selectedEquipes.nombrePersonnes;
    this.departementToUpdate = this.selectedEquipes.departement || '';
    this.projetToUpdate = this.selectedEquipes.projet || '';

    this.isUpdateModalVisible = true;
  }

  closeUpdateModal(): void {
    this.isUpdateModalVisible = false;
  }

  updateEquipe(): void {
    if (this.selectedEquipes && this.selectedEquipes.idEquipe) {
      // Mettre à jour selectedEquipe avec les nouvelles valeurs du formulaire
      this.selectedEquipes.nomEquipe = this.nomEquipeToUpdate;
      this.selectedEquipes.nombrePersonnes = this.nombrePersonnesToUpdate;
      this.selectedEquipes.departement = this.departementToUpdate;
      this.selectedEquipes.projet = this.projetToUpdate;

      // Appeler le service pour mettre à jour l'équipe
      this.equipeService.updateEquipe(this.selectedEquipes.idEquipe, this.selectedEquipes).subscribe(
        response => {
          console.log('Équipe mise à jour avec succès:', response);
          this.recupererListeEquipe();
          this.isUpdateModalVisible = false;
        },
        error => {
          console.error('Erreur lors de la mise à jour de l\'équipe:', error);
        }
      );
    }
  }

}