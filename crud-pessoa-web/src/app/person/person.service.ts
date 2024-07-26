import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Person } from './person-types';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiBaseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  listPerson(name: string): Observable<Person[]> {
    let params = new HttpParams();
    if (name) {
      params = params.append('name', name);
    }
    return this.http.get<Person[]>(`${this.apiBaseUrl}/person/`, { params });
  }

  createPerson(person: Person): Observable<Person> {
    delete person.id;
    return this.http.post<Person>(`${this.apiBaseUrl}/person/`, person);
  }

  updatePerson(person: Person, personId: number): Observable<Person> {
    delete person.id;
    return this.http.patch<Person>(`${this.apiBaseUrl}/person/${personId}/`, person);
  }

  deletePerson(personId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiBaseUrl}/person/${personId}/`);
  }

  getPersonIdealWeight(personId: number): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}/person-ideal-weight/${personId}/`);
  }
}
