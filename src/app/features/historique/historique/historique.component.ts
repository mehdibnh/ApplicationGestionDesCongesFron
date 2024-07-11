/*import { Component, OnInit } from '@angular/core';
import { Historique } from '../model/Historique.model';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit{
  historiques: Historique[] = [];

  constructor(private historiqueService: HistoriqueService) { }

  ngOnInit(): void {
    this.historiqueService.getAllHistorique().subscribe(data => {
      this.historiques = data;
    });
  }
}*/