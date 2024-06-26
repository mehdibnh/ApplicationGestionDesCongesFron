import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CongeService } from '../services/conge.service';
import { CongeModule } from '../Model/conge/conge.model';

@Component({
  selector: 'app-congemodifier',
  templateUrl: './congemodifier.component.html',
  styleUrls: ['./congemodifier.component.scss']
})
export class CongemodifierComponent implements OnInit {
  conge: CongeModule = {} as CongeModule;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private congeService: CongeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id']; // Convertir l'ID en nombre
    this.congeService.recupererCongeParId(this.id).subscribe(data => {
      this.conge = data;
    }, error => console.log(error));
  }

  onSubmit(): void {
    this.congeService.modifierConge(this.id, this.conge).subscribe(data => {
      this.router.navigate(['/']);
    }, error => console.log(error));
  }
}
