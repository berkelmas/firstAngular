import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'deneme';
  currentPage: string;
  currentRecipe: {};

  getPage(page: string) {
    this.currentPage = page;
    console.log(`Navigated To: ${page}`);
  }

  getSelectedRecipe(recipe: {}) {
    this.currentRecipe= recipe;
  }
}
