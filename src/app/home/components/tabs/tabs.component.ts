import { Component, OnInit } from '@angular/core';
import { HomeActions } from '../../home.actions';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  constructor(private readonly _homeActions: HomeActions) {}
  listCommitBack: any[] = [];
  listCommitFront: any[] = [];

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
