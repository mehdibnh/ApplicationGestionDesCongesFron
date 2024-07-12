import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../services/reclamation.service';
import { Reclamation } from '../models/reclamation.models';
import { MatDialog } from '@angular/material/dialog';
import { ReclamationEditComponent } from '../reclamationedit/reclamationedit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reclamation-list',
  templateUrl: './reclamation-list.component.html',
  styleUrls: ['./reclamation-list.component.scss']
})
export class ReclamationListComponent implements OnInit {
  reclamations: Reclamation[] = [];
  statistics: any;
  sortField: string = 'idReclamation';
  sortOrder: string = 'asc';

  constructor(private reclamationService: ReclamationService, public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.loadReclamations();
    this.loadStatistics();  // Charge les statistiques au démarrage
  }

  loadReclamations(): void {
    this.reclamationService.getSortedData(this.sortField, this.sortOrder).subscribe(
      data => {
        this.reclamations = data;
      },
      error => {
        console.error('Erreur lors de la récupération des réclamations', error);
      }
    );
  }

  loadStatistics(): void {
    this.reclamationService.getStatistics().subscribe(
      data => {
        this.statistics = data;
      },
      error => {
        console.error('Erreur lors de la récupération des statistiques', error);
      }
    );
  }

  sortData(field: string): void {
    if (this.sortField === field) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortOrder = 'asc';
    }
    this.loadReclamations();
  }

  onEdit(reclamation: Reclamation): void {
    const dialogRef = this.dialog.open(ReclamationEditComponent, {
      width: '400px',
      data: reclamation
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.reclamationService.modifierReclamation(result.idReclamation, result).subscribe(
          () => {
            this.loadReclamations();
          },
          error => {
            console.error('Erreur lors de la modification de la réclamation', error);
          }
        );
      }
    });
  }

  onclick(): void {
    this.router.navigate(['reclamation/Form']);
  }

  onDelete(reclamationId: number): void {
    this.reclamationService.supprimerReclamation(reclamationId).subscribe(
      () => {
        console.log('Réclamation supprimée avec succès');
        this.loadReclamations();
      },
      error => {
        console.error('Erreur lors de la suppression de la réclamation', error);
      }
    );
  }

  onArchive(reclamationId: number): void {
    this.reclamationService.archiverReclamation(reclamationId).subscribe(
      () => {
        console.log('Réclamation archivée avec succès');
        this.loadReclamations();
      },
      error => {
        console.error('Erreur lors de l\'archivage de la réclamation', error);
      }
    );
  }

  isSortedAsc(field: string): boolean {
    return this.sortField === field && this.sortOrder === 'asc';
  }

  isSortedDesc(field: string): boolean {
    return this.sortField === field && this.sortOrder === 'desc';
  }
}
