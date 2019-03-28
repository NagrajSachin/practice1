import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { shoppinglistService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingredient[];
  
  constructor(private shoppinglistservice : shoppinglistService) { }

  ngOnInit() {
    this.ingredients = this.shoppinglistservice.getIngredients();
    this.shoppinglistservice.ingredientAdded
    .subscribe(
      (ingredient : Ingredient[])=>{
        this.ingredients = ingredient;
    })
  }  
}
