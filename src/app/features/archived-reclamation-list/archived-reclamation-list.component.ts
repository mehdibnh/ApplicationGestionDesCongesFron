import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../reclamation/services/reclamation.service';
import { ArchivedReclamation } from '../reclamation/models/reclamation.models';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-archived-reclamation-list',
  templateUrl: './archived-reclamation-list.component.html',
  styleUrls: ['./archived-reclamation-list.component.scss']
})
export class ArchivedReclamationListComponent implements OnInit {
  archivedReclamations: ArchivedReclamation[] = [];

  constructor(private reclamationService: ReclamationService) {}

  ngOnInit(): void {
    this.loadArchivedReclamations();
  }

  loadArchivedReclamations(): void {
    this.reclamationService.recupererListeArchivedReclamation().subscribe(data => {
      this.archivedReclamations = data;
    }, error => {
      console.error('Error fetching archived reclamations', error);
    });
  }

  exportTable(): void {
    const csvData = this.convertToCSV(this.archivedReclamations);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    FileSaver.saveAs(blob, 'archived-reclamations.csv');
  }

  convertToCSV(data: ArchivedReclamation[]): string {
    const header = 'ID,Titre,Statut,Categorie,Date de création,Date d\'archivage,ID Original,Description';
    const rows = data.map(ar => `${ar.idArchivedReclamation},${ar.titre},${ar.status},${ar.categorie},${ar.dateCreation},${ar.dateArchivage},${ar.idOriginalReclamation},${ar.description}`);
    return [header, ...rows].join('\n');
  }

  deleteArchivedReclamation(id: number): void {
    this.reclamationService.supprimerArchivedReclamation(id).subscribe(() => {
      this.loadArchivedReclamations();
    }, error => {
      console.error('Error deleting archived reclamation', error);
    });
  }
}
