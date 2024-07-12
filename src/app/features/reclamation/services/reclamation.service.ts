import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reclamation, ArchivedReclamation } from '../models/reclamation.models';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  private apiUrl = 'http://localhost:8089';  // Assurez-vous que cette URL est correcte

  constructor(private http: HttpClient) {}

  ajouterReclamation(reclamation: Reclamation): Observable<Reclamation> {
    return this.http.post<Reclamation>(`${this.apiUrl}/reclamation/ajouter`, reclamation);
  }

  supprimerReclamation(idReclamation: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/reclamation/supprimer/${idReclamation}`);
  }

  recupererReclamation(idReclamation: number): Observable<Reclamation> {
    return this.http.get<Reclamation>(`${this.apiUrl}/reclamation/recuperer/${idReclamation}`);
  }

  modifierReclamation(idReclamation: number, reclamation: Reclamation): Observable<Reclamation> {
    return this.http.put<Reclamation>(`${this.apiUrl}/reclamation/modifier/${idReclamation}`, reclamation);
  }

  recupererListeReclamation(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(`${this.apiUrl}/reclamation/liste`);
  }

  archiverReclamation(idReclamation: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/reclamation/archiver`, null, {
      params: { idReclamation: idReclamation.toString() }
    });
  }

  recupererListeArchivedReclamation(): Observable<ArchivedReclamation[]> {
    return this.http.get<ArchivedReclamation[]>(`${this.apiUrl}/archived-reclamation/liste`);
  }

  supprimerArchivedReclamation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/archived-reclamation/supprimer/${id}`);
  }

  getSortedData(sortField: string, sortOrder: string): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(`${this.apiUrl}/reclamation/sorted-data`, {
      params: {
        sortField,
        sortOrder
      }
    });
  }

  getStatistics(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/reclamation/statistics`);
  }
}
