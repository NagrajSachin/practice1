import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../Recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes : Recipe[];

  constructor(private recipeservice : RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeservice.getRecipes();
  }

  onSelect(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
