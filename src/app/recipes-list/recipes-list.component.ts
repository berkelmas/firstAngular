import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {RecipesModel} from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes : RecipesModel[] = [
    new RecipesModel("Hamburger", "Hamburgerin ozellikleri burada anlatilacak.", "https://static.toiimg.com/photo/68283907.cms"),
    new RecipesModel("Hamburger2", "Deneme Desc", "https://static.toiimg.com/photo/68283907.cms")
  ];
  selectedRecipe: RecipesModel;
  @Output() sendSelectedRecipe: EventEmitter<RecipesModel> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getItem(e){
    this.selectedRecipe = e;
    this.sendSelectedRecipe.emit(this.selectedRecipe);
  }

}
