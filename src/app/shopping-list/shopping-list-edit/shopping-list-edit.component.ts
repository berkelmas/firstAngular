import { Component,
         OnInit,
         Output,
         Input,
         EventEmitter,
         ViewChild,
         ElementRef }
         from '@angular/core';
         
import {ShoppingListModel} from '../../shoppingList.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  shoppingListItem: ShoppingListModel;
  @Output() sendShoppingListItem: EventEmitter<any> = new EventEmitter();

  @ViewChild('name', {static : true}) name: ElementRef;
  @ViewChild('amount', {static : true}) amount: ElementRef;

  @Output() sendDeleteIngredient: EventEmitter<void> = new EventEmitter();
  @Output() sendClearIngredients: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  addIngredient(name: HTMLInputElement, amount: HTMLInputElement) {
    if (!Number.isNaN(parseInt(amount.value))) {
      this.shoppingListItem = new ShoppingListModel(name.value, parseInt(amount.value));
      this.sendShoppingListItem.emit(this.shoppingListItem);

      this.name.nativeElement.value = "";
      this.amount.nativeElement.value= "";
      console.log(this.name);
    }
  }

  deleteIngredient() {
    this.sendDeleteIngredient.emit();
  }

  clearIngredients() {
    this.sendClearIngredients.emit();
  }

}
