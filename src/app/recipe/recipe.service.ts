import { Recipe } from './Recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { InjectSetupWrapper } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { shoppinglistService } from '../shopping-list.service';

@Injectable()
export class RecipeService{
    recipes : Recipe[] = [
        new Recipe('recipe1','good recipe','./assets/images/jewish-apple-cake-28-754.jpg',[
            new Ingredient('apple',10),
            new Ingredient('pineapple',20)
        ]),
        new Recipe('recipe2','best recipe','./assets/images/apple-cake-77027-1.jpeg',[
            new Ingredient('mango',11),
            new Ingredient('butterfruit', 22)
        ])
      ]

    constructor(private shoppinglistservice : shoppinglistService){}

    getRecipes(){
        return this.recipes.slice();
    }

    addRecipeToShoppingList(ingredients : Ingredient[]){
        this.shoppinglistservice.addIngredient(ingredients);
    }
}

