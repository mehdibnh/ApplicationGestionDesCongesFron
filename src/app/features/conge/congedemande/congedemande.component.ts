import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CongeService } from '../services/conge.service';
import { CongeModule } from '../Model/conge/conge.model';
import { TypeConge } from '../Model/conge/conge.model';

@Component({
  selector: 'app-congedemande',
  templateUrl: './congedemande.component.html',
  styleUrls: ['./congedemande.component.scss']
})
export class CongedemandeComponent {
  newConge: CongeModule = {
    dateDebut: new Date(), // Initialisez avec une chaîne vide pour correspondre au type 'date' dans le formulaire
    typeConge: TypeConge.RTT,
    certifie: false
  };
  

  constructor(private congeService: CongeService) { }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.congeService.ajouterConge(this.newConge).subscribe((conge) => {
        console.log('Congé ajouté avec succès', conge);
        form.resetForm();
        this.newConge = {
          dateDebut: new Date (), // Réinitialisez à une chaîne vide après la soumission
          dateFin: new Date (),
          typeConge: TypeConge.RTT,
          certifie: false
        };
      }, (error) => {
        console.error('Erreur lors de l\'ajout du congé', error);
      });
    }
  }
}
