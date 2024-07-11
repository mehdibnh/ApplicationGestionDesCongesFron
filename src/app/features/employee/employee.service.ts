import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Employee } from './model/Employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8089/api/employees';

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<Employee[]> {
    return this.http
      .get<Employee[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http
      .get<Employee>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  getEmployeeByName(nom: string): Observable<Employee> {
    return this.http
      .get<Employee>(`${this.apiUrl}/search?nom=${nom}`)
      .pipe(catchError(this.handleError));
  }

  getEmployeeByNameSurname(prenom: string, nom: string): Observable<Employee> {
    const params = { prenom, nom };
    return this.http
      .get<Employee>(`${this.apiUrl}/search`, { params })
      .pipe(catchError(this.handleError));
  }

  getEmployeeByPoste(role: string): Observable<Employee> {
    const params = { role };
    return this.http
      .get<Employee>(`${this.apiUrl}/searchByPoste`, { params })
      .pipe(catchError(this.handleError));
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    console.log(employee);
    return this.http.put<Employee>(`${this.apiUrl}/${id}`, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  getEmployeesByRole(role: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/${role}`);
  }

  getEmployeesWithoutTeam(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/without-team`);
  }
  getManagersWithoutTeam(): Observable<Employee[]> {
    return this.http.get<Employee[]>(
      `${this.apiUrl}/without-team/role/Manager`
    );
  }

  getMembersWithoutTeam(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/without-team/role/Member`);
  }

  getMembers(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/Member`);
  }

  desaffecterEmployeesByEquipeId(idEquipe: number): Observable<string> {
    return this.http.delete<string>(
      `${this.apiUrl}/desaffecter-par-equipe/${idEquipe}`,
      { responseType: 'text' as 'json' }
    );
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  affecterHistoriqueAEmployee(
    idEmployee: number,
    idHistorique: number
  ): Observable<string> {
    return this.http
      .post<string>(
        `${this.apiUrl}/${idEmployee}/historique/${idHistorique}`,
        {}
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError('Something went wrong; please try again later.');
  }
}
