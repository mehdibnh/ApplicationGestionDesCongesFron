import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReclamationService } from '../services/reclamation.service';
import { Reclamation, Status } from '../models/reclamation.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reclamationform',
  templateUrl: './reclamationform.component.html',
  styleUrls: ['./reclamationform.component.scss']
})
export class ReclamationFormComponent implements OnInit {
  reclamationForm: FormGroup;
  statuses = Object.values(Status);

  constructor(
    private fb: FormBuilder,
    private reclamationService: ReclamationService,
    private router: Router
  ) {
    this.reclamationForm = this.fb.group({
      titre: ['', Validators.required],
      status: ['', Validators.required],
      categorie: ['', Validators.required],
      dateCreationDate: ['', Validators.required],
      dateCreationTime: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.reclamationForm.valid) {
      const formValue = this.reclamationForm.value;
      const dateCreation = `${formValue.dateCreationDate}T${formValue.dateCreationTime}:00`;

      const newReclamation: Reclamation = {
        idReclamation: 0,
        titre: formValue.titre,
        status: formValue.status,
        categorie: formValue.categorie,
        dateCreation: dateCreation,
        description: formValue.description
      };

      this.reclamationService.ajouterReclamation(newReclamation).subscribe(
        response => {
          console.log('Réclamation ajoutée avec succès', response);
          this.reclamationForm.reset();
          this.router.navigate(['/reclamation/Liste']);
        },
        error => {
          console.error('Erreur lors de l\'ajout de la réclamation', error);
        }
      );
    }
  }
}
