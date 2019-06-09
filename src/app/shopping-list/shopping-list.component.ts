import { Component, OnInit } from '@angular/core';
import {ShoppingListModel} from '../shoppingList.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  public shoppingList: ShoppingListModel[] = [new ShoppingListModel("deneme", 10), new ShoppingListModel("deneme1", 20)];
  selectedShopping: string;

  constructor() {}

  ngOnInit() {}

  selectShoppingItem(item) {
    this.selectedShopping= item.name;
  }

  getShoppingListItem(item: ShoppingListModel) {
      this.shoppingList.push(item);
  }

  deleteListItem() {
    for (let i = 0; i < this.shoppingList.length; i++) {
      if (this.shoppingList[i].name === this.selectedShopping) {
        this.shoppingList.splice(i, 1);
      }
    }
  }

  clearItems() {
    this.shoppingList.splice(0, this.shoppingList.length);
  }

}
