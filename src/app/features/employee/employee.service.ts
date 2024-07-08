import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './model/Employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8089/employee';

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }
  getEmployeeByName(nom: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/search?nom=${nom}`);
  }
  


  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrl}/${id}`, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  affecterHistoriqueAEmployee(idEmployee: number, idHistorique: number): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/${idEmployee}/historique/${idHistorique}`, {});
  }

  
 getEmployeesByRole(role: string): Observable<Employee[]> {
  return this.http.get<Employee[]>(`${this.apiUrl}/${role}`);
}

  getEmployeesWithoutTeam(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/without-team`);
  }
  getManagersWithoutTeam(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/without-team/role/Manager`);
  }

  getMembersWithoutTeam(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/without-team/role/Member`);
  }

  getMembers(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/Member`);
  }

  desaffecterEmployeesByEquipeId(idEquipe: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/desaffecter-par-equipe/${idEquipe}`, { responseType: 'text' as 'json' });
  }
}