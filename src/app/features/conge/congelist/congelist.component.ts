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
}


