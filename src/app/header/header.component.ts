import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarToggled = false;
  dropdownToggled = false;

  currentPage: string = "shopping-list";

  @Output() passPage: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.passPage.emit(this.currentPage)
  }

  navbarToggle() {
    this.navbarToggled =  !this.navbarToggled;
  }

  dropdownToggle() {
    this.dropdownToggled = !this.dropdownToggled;
  }

  changePage(page: string) {
    this.currentPage = page;
    this.passPage.emit(this.currentPage);
  }

}
