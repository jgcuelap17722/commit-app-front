import { Component, OnInit } from '@angular/core';
import { HomeActions } from '../../home.actions';
import { apiResponse } from '../interfaces/list-commit.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  constructor(private readonly _homeActions: HomeActions) {}
  listCommitBack: apiResponse = {
    success: false,
    pagination: {
      currentPage: 0,
      totalItems: 0,
      totalPages: 0,
    },
    data: [],
  };

  listCommitFront: apiResponse = {
    success: false,
    pagination: {
      currentPage: 0,
      totalItems: 0,
      totalPages: 0,
    },
    data: [],
  };
  urlBackend = `${environment.API_URL}/_docs`;

  ngOnInit(): void {
    this.getListCommitFront();
    this.getListCommitsBack();
  }

  getListCommitsBack() {
    this._homeActions.getListCommitBack().subscribe((data) => {
      this.listCommitBack = data;
    });
  }

  getListCommitFront() {
    this._homeActions.getListCommitFront().subscribe((data) => {
      this.listCommitFront = data;
    });
  }
}
