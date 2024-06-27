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

  recupererListeConge(): Observable<CongeModule[]> {
    return this.http.get<CongeModule[]>(`${this.apiUrl}/liste`); 
  }
  recupererCongeParId(id: number): Observable<CongeModule> {
    return this.http.get<CongeModule>(`${this.apiUrl}/${id}`);
  }

  modifierConge(id: number, conge: CongeModule): Observable<CongeModule> {
    return this.http.put<CongeModule>(`${this.apiUrl}/modifier/${id}`, conge);
  }
  accepterConge(idConge: number): Observable<CongeModule> {
    return this.http.put<CongeModule>(`${this.apiUrl}/accepter/${idConge}`, {});
  }
  refuseConge(idConge: number): Observable<CongeModule> {
    return this.http.put<CongeModule>(`${this.apiUrl}/refuse/${idConge}`, {});
  }


}