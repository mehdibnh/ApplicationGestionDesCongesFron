import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CongeService } from '../services/conge.service';
import { CongeModule, TypeConge } from '../Model/conge/conge.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-congedemande',
  templateUrl: './congedemande.component.html',
  styleUrls: ['./congedemande.component.scss']
})
export class CongedemandeComponent {
  newConge: CongeModule = {
    dateDebut: new Date(),
    dateFin: new Date(),
    typeConge: TypeConge.Annuel,
    certifie: false
  };

  constructor(
    private route: ActivatedRoute,
    private congeService: CongeService,
    private router: Router
  ) { }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.congeService.ajouterConge(this.newConge).subscribe((conge) => {
        console.log('Congé ajouté avec succès', conge);
        form.resetForm();
        this.newConge = {
          dateDebut: new Date(), 
          dateFin: new Date(),
          typeConge: TypeConge.Annuel,
          certifie: false,
        };
        this.router.navigate(['../conge']);
      }, (error) => {
        console.error('Erreur lors de l\'ajout du congé', error);
      });
    }
  }
}
