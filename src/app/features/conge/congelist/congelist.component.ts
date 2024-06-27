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

  constructor(private congeService: CongeService, private router: Router) { }

  ngOnInit(): void {
    this.congeService.recupererListeConge().subscribe(data => {
      this.conges = data;
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
      // Mettre à jour le statut du congé dans la liste
      const congeIndex = this.conges.findIndex(conge => conge.idConge === idConge);
      if (congeIndex !== -1) {
        this.conges[congeIndex] = updatedConge;
      }
    });
  } else {
    console.error('idConge is undefined');
  }
}
}



