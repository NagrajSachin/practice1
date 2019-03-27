import { Component, OnInit } from '@angular/core';
import { Recipe } from './Recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  selected : Recipe;

  constructor() { }

  ngOnInit() {
  }

}
