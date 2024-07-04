import { Component } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf, NgFor } from '@angular/common';
import { blogcards } from 'src/app/dashboard/dashboard-components/blog-cards/blog-cards-data'; 
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { Router } from '@angular/router';
import { TopSelling } from 'src/app/component/table/table-data';// Assurez-vous que ce chemin est correct

const FILTER_PAG_REGEX = /[^0-9]/g;



@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  standalone: true,
  imports: [NgbPaginationModule, NgIf, NgFor],
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent {

  page = 4;
  page2 = 4;
  currentPage = 3;
  page3 = 4;

  // disabled
  page4 = 3;
  isDisabled = true;

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }

  // custom links
  page5 = 4;

  getPageSymbol(current: number) {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
  }

  selectPage(page: string) {
    this.page5 = parseInt(page, 10) || 1;
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }

  blogcards = blogcards;
  TopSelling = TopSelling;
  constructor(private router: Router) { }

  navigateToForm() {
    this.router.navigate(['/equipe/formule']);
  }

  

}
