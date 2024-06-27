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
    }, error => {
      console.log(error);
    });
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.congeService.modifierConge(this.congeId, this.conge).subscribe(() => {
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
      });
    }
  }
}
