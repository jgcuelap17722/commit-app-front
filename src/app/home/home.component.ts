import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { HomeActions } from './home.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  listCommitBack: any[] = [];

  constructor(
    private apiService: ApiService,
    private readonly _homeActions: HomeActions
  ) {}

  ngOnInit(): void {
    this.getListCommitBack();
    this.getListCommitFront();
  }

  getListCommitBack() {
    this.apiService.getListCommitBack().subscribe((data) => {
      this._homeActions.setListCommitBack(data);
    });
  }

  getListCommitFront() {
    this.apiService.getListCommitFront().subscribe((data) => {
      this._homeActions.setListCommitFront(data);
    });
  }
}
