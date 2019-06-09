import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {RecipesModel} from '../../recipes.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent implements OnInit {
  buttonDropdownToggled = false;
  @Input() recipesSingleItem: RecipesModel;

  constructor() { }

  ngOnInit() {}

  buttonDropdown() {
    this.buttonDropdownToggled = !this.buttonDropdownToggled;
  }

}
