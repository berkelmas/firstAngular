import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() currentRecipeDetail: {};

  buttonDropdownToggled: boolean = false;

  constructor() {}

  ngOnInit() {}

  buttonDropdown() {
    this.buttonDropdownToggled = !this.buttonDropdownToggled;
  }

}
