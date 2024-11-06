import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wizard } from '../models/wizard';

@Injectable({
    providedIn: 'root'
})
export class WizardsService {
  private readonly API_URL = 'https://hp-api.onrender.com/api/characters';

  constructor(private http: HttpClient) { }

  getWizards(): Observable<Wizard[]> {
    return this.http.get<Wizard[]>(this.API_URL);
  }
}