import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CongeModule } from '../Model/conge/conge.model';

@Injectable({
  providedIn: 'root'
})
export class CongeService {
  private apiUrl = 'http://localhost:8089/conge'; // URL d'API mise à jour

  constructor(private http: HttpClient) { }

  ajouterConge(conge: CongeModule): Observable<CongeModule> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<CongeModule>(`${this.apiUrl}/ajouter`, conge, { headers });
  }

  recupererListeConge(): Observable<CongeModule[]> {
    return this.http.get<CongeModule[]>(`${this.apiUrl}/liste`); 
  }
 
  recupererCongeParId(id: number): Observable<CongeModule> {
    return this.http.get<CongeModule>(`${this.apiUrl}/recuperer/${id}`); // Assurez-vous que l'URL correspond à votre endpoint Spring Boot
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

  supprimeConge(idConge: number): Observable<CongeModule> {
    return this.http.delete<CongeModule>(`${this.apiUrl}/supprimer/${idConge}`, {});
  }

  recupererListeCongeenvoyerparunemployer(idemployer: number): Observable<CongeModule> {
    return this.http.delete<CongeModule>(`${this.apiUrl}/recupererListeCongeenvoyerparunemployer/${idemployer}`, {});
  }



}