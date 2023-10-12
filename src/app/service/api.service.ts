import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LIST_COMMITS_BACK, LIST_COMMITS_FRONT } from '../urls';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getListCommitBack(): Observable<any> {
    return this.http.get<any>(LIST_COMMITS_BACK);
  }

  public getListCommitFront(): Observable<any> {
    return this.http.get<any>(LIST_COMMITS_FRONT);
  }
}
