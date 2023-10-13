import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { apiResponse } from './components/interfaces/list-commit.interface';

@Injectable()
export class HomeActions {
  private _listCommitBack = new Subject<apiResponse>();
  private _listCommitFront = new Subject<apiResponse>();

  public getListCommitBack(): Observable<apiResponse> {
    return this._listCommitBack.asObservable();
  }
  public setListCommitBack(value: apiResponse) {
    this._listCommitBack.next(value);
  }

  public getListCommitFront(): Observable<apiResponse> {
    return this._listCommitFront.asObservable();
  }
  public setListCommitFront(value: apiResponse) {
    this._listCommitFront.next(value);
  }
}
