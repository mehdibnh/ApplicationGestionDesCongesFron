import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DepartementModule } from '../departement.module';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  private apiUrl = 'http://localhost:8089/departemment';  // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  ajouterDepartement(departement: DepartementModule): Observable<DepartementModule> {
    return this.http.post<DepartementModule>(`${this.apiUrl}/ajouter`, departement);
  }

  // Vous pouvez ajouter d'autres méthodes pour récupérer, mettre à jour ou supprimer des départements ici
}
