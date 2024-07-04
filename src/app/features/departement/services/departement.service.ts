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

  private apiUrl1 = 'http://localhost:8089/departemment/liste';

    getDepartments(): Observable<DepartementModule[]> {
        return this.http.get<DepartementModule[]>(this.apiUrl1);
}}
