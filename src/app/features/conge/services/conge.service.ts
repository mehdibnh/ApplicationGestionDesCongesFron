import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CongeModule } from '../Model/conge/conge.model';

@Injectable({
  providedIn: 'root'
})
export class CongeService {
  private apiUrl = 'http://localhost:8089/conge'; // URL d'API mise à jour

  constructor(private http: HttpClient) { }

  ajouterConge(conge: CongeModule): Observable<CongeModule> {
    return this.http.post<CongeModule>(`${this.apiUrl}/ajouter`, conge);
  }

  // autres méthodes du service...
}