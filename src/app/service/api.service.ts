import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LIST_COMMITS_BACK, LIST_COMMITS_FRONT } from '../urls';
import { apiResponse } from '../home/components/interfaces/list-commit.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getListCommitBack(
    page: number,
    limit: number = 10
  ): Observable<apiResponse> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    return this.http.get<any>(LIST_COMMITS_BACK, { params });
  }

  public getListCommitFront(
    page: number,
    limit: number = 10
  ): Observable<apiResponse> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    return this.http.get<any>(LIST_COMMITS_FRONT, { params });
  }
}
