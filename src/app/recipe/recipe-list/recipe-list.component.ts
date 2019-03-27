import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../Recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes : Recipe[] = [
    new Recipe('recipe1','good recipe','./assets/images/jewish-apple-cake-28-754.jpg'),
    new Recipe('recipe2','best recipe','./assets/images/apple-cake-77027-1.jpeg')
  ]

  constructor() { }

  ngOnInit() {
  }

  onSelect(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
