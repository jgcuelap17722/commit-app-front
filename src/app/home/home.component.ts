import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { HomeActions } from './home.actions';
import { initFlowbite } from 'flowbite';
import { apiResponse } from './components/interfaces/list-commit.interface';

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
    initFlowbite();
    this.getListCommitBack();
    this.getListCommitFront();
  }

  getListCommitBack() {
    this.apiService.getListCommitBack(1).subscribe((data: apiResponse) => {
      this._homeActions.setListCommitBack(data);
    });
  }

  getListCommitFront() {
    this.apiService.getListCommitFront(1).subscribe((data) => {
      this._homeActions.setListCommitFront(data);
    });
  }
}
