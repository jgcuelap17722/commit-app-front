import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class HomeActions {
  private _listCommitBack = new Subject<object[]>();
  private _listCommitFront = new Subject<object[]>();

  public getListCommitBack() {
    return this._listCommitBack.asObservable();
  }
  public setListCommitBack(value: object[]) {
    this._listCommitBack.next(value);
  }

  public getListCommitFront() {
    return this._listCommitFront.asObservable();
  }
  public setListCommitFront(value: object[]) {
    this._listCommitFront.next(value);
  }
}
