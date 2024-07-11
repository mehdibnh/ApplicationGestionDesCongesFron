/*import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Historique } from './model/Historique.model';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueserviceService {
  private apiUrl = 'http://localhost:8085/api/historique'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  getAllHistorique(): Observable<Historique[]> {
    return this.http.get<Historique[]>(this.apiUrl);
  }

  getHistoriqueByUsername(username: string): Observable<Historique[]> {
    const params = new HttpParams().set('nom', username);
    return this.http.get<Historique[]>(`${this.apiUrl}/byUsername`, { params });
  }

  getHistoriqueByAction(action: string): Observable<Historique[]> {
    const params = new HttpParams().set('action', action);
    return this.http.get<Historique[]>(`${this.apiUrl}/byAction`, { params });
  }

  getHistoriqueByCongeId(idConge: number): Observable<Historique[]> {
    const params = new HttpParams().set('idConge', idConge.toString());
    return this.http.get<Historique[]>(`${this.apiUrl}/byCongeId`, { params });
  }
}*/
