import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public link1: boolean;
  public link2: boolean;
  public link3: boolean;
  public link4: boolean;
  public link5: boolean;
  public activeLinkText?: string;
  constructor(private router: ActivatedRoute) {
    this.link1 = true;
    this.link2 = this.link3 = this.link4 = this.link5 = false;
  }
  ngOnInit(): void {
    const url = window.location.href;

    const activeLinkLength = url.split('/').length - 1;
    var activeLinkText = url.split('/')[activeLinkLength];
    if (activeLinkText == 'employees-list') {
      this.link1 = true;
    } else if (activeLinkText == 'whosaway') {
      this.link1 = false;
      this.link2 = true;
    } else if (activeLinkText == 'news') {
      this.link1 = false;
      this.link3 = true;
    } else if (activeLinkText == 'events') {
      this.link1 = false;
      this.link4 = true;
    } else if (activeLinkText == 'settings') {
      this.link1 = false;
      this.link5 = true;
    }
  }

  active(e: any) {
    if (e == 1) {
      this.link1 = true;
      this.link2 = this.link3 = this.link4 = this.link5 = false;
    }
    if (e == 2) {
      this.link2 = true;
      this.link1 = this.link3 = this.link4 = this.link5 = false;
    }
    if (e == 3) {
      this.link1 = this.link2 = this.link4 = this.link5 = false;
      this.link3 = true;
    }
    if (e == 4) {
      this.link1 = this.link2 = this.link3 = this.link5 = false;
      this.link4 = true;
    }
    if (e == 5) {
      this.link1 = this.link2 = this.link3 = this.link4 = false;
      this.link5 = true;
    }
  }
}
