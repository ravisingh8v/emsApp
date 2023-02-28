import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public employeesList: boolean;
  public whosAway: boolean;
  public news: boolean;
  public events: boolean;
  public settings: boolean;
  public activeLinkText?: string;
  constructor() {
    this.employeesList = true;
    this.whosAway = this.news = this.events = this.settings = false;
  }
  ngOnInit(): void {
    /**
     * Getting Url Path for current active page
     */
    const url = window.location.href;
    const activeLinkLength = url.split('/').length - 1;
    var activeLinkText = url.split('/')[activeLinkLength];
    /**
     * Active the style based on page
     */
    if (activeLinkText == 'employees-list') {
      this.employeesList = true;
    } else if (activeLinkText == 'whosaway') {
      this.employeesList = false;
      this.whosAway = true;
    } else if (activeLinkText == 'news') {
      this.employeesList = false;
      this.news = true;
    } else if (activeLinkText == 'events') {
      this.employeesList = false;
      this.events = true;
    } else if (activeLinkText == 'settings') {
      this.employeesList = false;
      this.settings = true;
    }
  }
  /**
   * Sidebar Active Click
   * @param link
   */
  active(link: any) {
    if (link == 1) {
      this.employeesList = true;
      this.whosAway = this.news = this.events = this.settings = false;
    }
    if (link == 2) {
      this.whosAway = true;
      this.employeesList = this.news = this.events = this.settings = false;
    }
    if (link == 3) {
      this.employeesList = this.whosAway = this.events = this.settings = false;
      this.news = true;
    }
    if (link == 4) {
      this.employeesList = this.whosAway = this.news = this.settings = false;
      this.events = true;
    }
    if (link == 5) {
      this.employeesList = this.whosAway = this.news = this.events = false;
      this.settings = true;
    }
  }
}
