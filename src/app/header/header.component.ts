import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarToggled = false;
  dropdownToggled = false;

  constructor() { }

  ngOnInit() {
  }

  navbarToggle() {
    this.navbarToggled =  !this.navbarToggled;
  }

  dropdownToggle() {
    this.dropdownToggled = !this.dropdownToggled;
  }

}
