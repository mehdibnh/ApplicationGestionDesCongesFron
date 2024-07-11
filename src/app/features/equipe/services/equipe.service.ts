import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EquipeModule } from '../models/equipe/equipe.module';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  private apiUrl = 'http://localhost:8089/equipe';  // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  ajouterEquipe(equipe: EquipeModule): Observable<EquipeModule> {
    return this.http.post<EquipeModule>(`${this.apiUrl}/ajouter`, equipe);

  };

  
  assignTeamLeader(equipeId: number, employeeId: number): Observable<string> {
    const params = new HttpParams()
      .set('equipeId', equipeId.toString())
      .set('employeeId', employeeId.toString());

    return this.http.post(`${this.apiUrl}/assignTeamLeader`, null, { params, responseType: 'text' });
  }

  addMembersToEquipe(equipeId: number, employeeIds: number[]): Observable<string> {
    return this.http.post(`${this.apiUrl}/addMembers`, employeeIds, {
      params: new HttpParams().set('equipeId', equipeId.toString()),
      responseType: 'text'
    });
  }
  recupererListeEquipe(): Observable<EquipeModule[]> {
    return this.http.get<EquipeModule[]>(`${this.apiUrl}/liste`);
  }

  deleteEquipe(equipeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${equipeId}`);
  }

  updateEquipe(idEquipe: number, equipeDetails: EquipeModule): Observable<EquipeModule> {
    return this.http.put<EquipeModule>(`${this.apiUrl}/${idEquipe}`, equipeDetails);
  }
}
