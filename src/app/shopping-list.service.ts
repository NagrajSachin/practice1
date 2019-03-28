import { Ingredient } from './shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class shoppinglistService{
    ingredientAdded = new EventEmitter<Ingredient[]>();
    ingredients : Ingredient[] = [
        new Ingredient('apple',10),
        new Ingredient('banana',20)
      ]

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredients(ingredient : Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientAdded.emit(this.ingredients.slice());
    }

    addIngredient(ingredients : Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientAdded.emit(this.ingredients.slice());
    }
}