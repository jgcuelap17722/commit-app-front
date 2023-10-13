import { Component, Input, OnInit } from '@angular/core';
import { HomeActions } from '../../home.actions';
import { apiResponse } from '../interfaces/list-commit.interface';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() listCommit: apiResponse = {
    success: false,
    pagination: {
      currentPage: 0,
      totalItems: 0,
      totalPages: 0,
    },
    data: [],
  };
  @Input() typeList: string = '';
  currentPage: number = 1;
  allPages: number[] = [];
  totalPages: number = 0;

  constructor(
    private readonly _homeActions: HomeActions,
    private readonly _apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.getNumberPages();
  }

  clickPage(numPage: number) {
    this.currentPage = numPage;
    if (this.typeList === 'back') {
      this._apiService
        .getListCommitBack(numPage)
        .subscribe((data: apiResponse) => {
          this._homeActions.setListCommitBack(data);
        });
      return;
    }

    if (this.typeList === 'front') {
      this._apiService.getListCommitFront(numPage).subscribe((data) => {
        this._homeActions.setListCommitFront(data);
      });
      return;
    }
  }

  getNumberPages() {
    if (this.typeList === 'back') {
      this._homeActions.getListCommitBack().subscribe((data) => {
        this.totalPages = data.pagination.totalPages;
        this.allPages = Array.from(
          { length: this.totalPages },
          (_, index) => index + 1
        );
      });
      return;
    }

    if (this.typeList === 'front') {
      this._homeActions.getListCommitFront().subscribe((data) => {
        this.totalPages = data.pagination.totalPages;
        this.allPages = Array.from(
          { length: this.totalPages },
          (_, index) => index + 1
        );
      });
      return;
    }
  }

  previous() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.clickPage(this.currentPage);
    }
  }

  next() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.clickPage(this.currentPage);
    }
  }
}
