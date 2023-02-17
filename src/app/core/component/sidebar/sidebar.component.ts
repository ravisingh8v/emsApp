import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public link1: boolean;
  public link2: boolean;
  public link3: boolean;
  public link4: boolean;
  public link5: boolean;
  constructor() {
    this.link1 = true;
    this.link2 = false;
    this.link3 = false;
    this.link4 = false;
    this.link5 = false;
  }
  active(e: any) {
    console.log(e);
    if (e == 1) {
      this.link1 = true;
      this.link2 = false;
      this.link3 = false;
      this.link4 = false;
      this.link5 = false;
    } else if (e == 2) {
      this.link1 = false;
      this.link2 = true;
      this.link3 = false;
      this.link4 = false;
      this.link5 = false;
    } else if (e == 3) {
      this.link1 = false;
      this.link2 = false;
      this.link3 = true;
      this.link4 = false;
      this.link5 = false;
    } else if (e == 4) {
      this.link1 = false;
      this.link2 = false;
      this.link3 = false;
      this.link4 = true;
      this.link5 = false;
    } else if (e == 5) {
      this.link1 = false;
      this.link2 = false;
      this.link3 = false;
      this.link4 = false;
      this.link5 = true;
    }
  }
}
