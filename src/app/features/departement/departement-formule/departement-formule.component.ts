import { Component } from '@angular/core';
import { DepartementService} from '../services/departement.service';
import { DepartementModule } from '../departement.module';

@Component({
  selector: 'app-departement-formule',
  templateUrl: './departement-formule.component.html',
  styleUrls: ['./departement-formule.component.scss']
})
export class DepartementFormuleComponent {
  nomDepartement: string = '';
  descriptionDepartement: string = '';
  teamNumber: number | undefined;

  constructor(private departementService: DepartementService) {}

  onSubmit() {
    const nouveauDepartement: DepartementModule = {
      nomDepartement: this.nomDepartement,
      descriptionDepartement: this.descriptionDepartement,
      teamNumber: this.teamNumber
    };

    this.departementService.ajouterDepartement(nouveauDepartement).subscribe(
      response => {
        console.log('Nouveau Département ajouté:', response);
        // Traitez la réponse ici si nécessaire
      },
      error => {
        console.error('Erreur lors de l\'ajout du département', error);
        // Gérer l'erreur ici si nécessaire
      }
    );

    this.resetForm();
  }

  resetForm() {
    this.nomDepartement = '';
    this.descriptionDepartement = '';
    this.teamNumber = undefined;
  }

  // Si nécessaire, vous pouvez définir d'autres méthodes ou propriétés ici

  TopSelling: any = {}; // Exemple de propriété TopSelling

  openPopup(team: any) {
    // Logique pour ouvrir la fenêtre modale si nécessaire
  }

  closePopup() {
    // Logique pour fermer la fenêtre modale si nécessaire
  }

}
