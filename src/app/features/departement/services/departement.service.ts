import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DepartementModule } from '../departement.module';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  private apiUrl = 'http://localhost:8089/departemment';  // URL de votre API

  constructor(private http: HttpClient) { }

  ajouterDepartement(departement: DepartementModule): Observable<DepartementModule> {
    return this.http.post<DepartementModule>(`${this.apiUrl}/ajouter`, departement);
  }

  private apiUrl1 = 'http://localhost:8089/departemment';

  getDepartments(): Observable<string[]> {
    return this.http.get<any[]>(`${this.apiUrl1}/liste`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('Error fetching departments', error);
    return throwError('Error fetching departments; please try again later.');
  }
}

