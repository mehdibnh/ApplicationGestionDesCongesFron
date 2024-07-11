import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CongeService } from '../services/conge.service'; // Assurez-vous d'importer le service correct
import { CongeModule } from '../Model/conge/conge.model';

@Component({
  selector: 'app-congelist',
  templateUrl: './congelist.component.html',
  styleUrls: ['./congelist.component.scss']
})
export class CongelistComponent implements OnInit {
  conges: CongeModule[] = [];
  searchId: number | undefined;

  constructor(private congeService: CongeService, private router: Router) { }

  ngOnInit(): void {
    this.congeService.recupererListeConge().subscribe(data => {
      this.conges = data.sort((a, b) => {
        if (a.statut === 'enattente' && b.statut !== 'enattente') {
          return -1;
        } else if (a.statut !== 'enattente' && b.statut === 'enattente') {
          return 1;
        }
        return 0;
      });
    });
  }

 accepterConge(idConge: number): void {
  this.congeService.accepterConge(idConge).subscribe(updatedConge => {
    const congeIndex = this.conges.findIndex(conge => conge.idConge === idConge);
    if (congeIndex !== -1) {
      this.conges[congeIndex] = updatedConge;
    }
  });
}
refuseConge(idConge: number | undefined): void {
  if (idConge !== undefined) {
    this.congeService.refuseConge(idConge).subscribe(updatedConge => {
      const congeIndex = this.conges.findIndex(conge => conge.idConge === idConge);
      if (congeIndex !== -1) {
        this.conges[congeIndex] = updatedConge;
      }
    });
  } else {
    console.error('idConge is undefined');
  }
}
supprime(idConge: number | undefined): void {
  if (idConge !== undefined) {
    this.congeService.supprimeConge(idConge).subscribe(() => {
      this.conges = this.conges.filter(conge => conge.idConge !== idConge);
    }, (error) => {
      console.error('Erreur lors de la suppression du congé', error);
    });
  } else {
    console.error('idConge is undefined');
  }
}

chercherConge(): void {
  if (this.searchId !== undefined) {
    this.congeService.recupererCongeParId(this.searchId).subscribe(conge => {
      this.conges = [conge];
    }, error => {
      console.error('Erreur lors de la recherche du congé', error);
    });
  } else {
    console.error('ID de recherche non défini');
  }
}

}



