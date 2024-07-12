import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reclamation, Status } from '../models/reclamation.models';

@Component({
  selector: 'app-reclamationedit',
  templateUrl: './reclamationedit.component.html',
  styleUrls: ['./reclamationedit.component.scss']
})
export class ReclamationEditComponent implements OnInit {
  reclamationForm: FormGroup;
  statuses = Object.values(Status);

  constructor(
    public dialogRef: MatDialogRef<ReclamationEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Reclamation,
    private fb: FormBuilder
  ) {
    this.reclamationForm = this.fb.group({
      titre: [data.titre, Validators.required],
      status: [data.status, Validators.required],
      categorie: [data.categorie, Validators.required],
      dateCreationDate: [new Date(data.dateCreation).toISOString().split('T')[0], Validators.required],
      dateCreationTime: [new Date(data.dateCreation).toISOString().split('T')[1].substring(0, 5), Validators.required],
      description: [data.description, Validators.required]  // Include description field
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.reclamationForm.valid) {
      const formValue = this.reclamationForm.value;
      const dateCreation = `${formValue.dateCreationDate}T${formValue.dateCreationTime}:00`;

      const updatedReclamation: Reclamation = {
        ...this.data,
        titre: formValue.titre,
        status: formValue.status,
        categorie: formValue.categorie,
        dateCreation: dateCreation,
        description: formValue.description  // Include description
      };

      this.dialogRef.close(updatedReclamation);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
