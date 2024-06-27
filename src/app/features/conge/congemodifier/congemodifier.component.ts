import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CongeService } from '../services/conge.service';
import { CongeModule, TypeConge } from '../Model/conge/conge.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-congemodifier',
  templateUrl: './congemodifier.component.html',
  styleUrls: ['./congemodifier.component.scss']
})
export class CongemodifierComponent implements OnInit {
  conge: CongeModule = {
    dateDebut: new Date(),
    dateFin: new Date(),
    typeConge: TypeConge.Annuel,
    certifie: false
  };
  congeId!: number;
  loading: boolean = true;

  // Properties for formatted dates
  formattedDateDebut: string = '';
  formattedDateFin: string = '';

  constructor(
    private route: ActivatedRoute,
    private congeService: CongeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.congeId = +this.route.snapshot.params['id'];
    if (isNaN(this.congeId)) {
      console.error('Invalid congeId');
      return;
    }
    this.recupererConge();
  }

  recupererConge(): void {
    this.congeService.recupererCongeParId(this.congeId).subscribe(data => {
      this.conge = data;
      // Format the dates for the form
      this.formattedDateDebut = this.conge.dateDebut ? this.formatDate(this.conge.dateDebut) : '';
      this.formattedDateFin = this.conge.dateFin ? this.formatDate(this.conge.dateFin) : '';
      this.loading = false;
      console.log('Conge data loaded:', this.conge);
    }, error => {
      console.log(error);
      this.loading = false;
    });
  }

  formatDate(date: Date): string {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      // Convert formatted dates back to Date objects
      this.conge.dateDebut = new Date(this.formattedDateDebut);
      this.conge.dateFin = new Date(this.formattedDateFin);
      
      this.congeService.modifierConge(this.congeId, this.conge).subscribe(() => {
        this.router.navigate(['/conge']);
      }, error => {
        console.log(error);
      });
    }
  }
}
