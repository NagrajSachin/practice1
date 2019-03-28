import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { shoppinglistService } from 'src/app/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountRef : ElementRef;

  constructor(private shoppinglistservice : shoppinglistService) { }

  ngOnInit() {
  }

  onInput(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);
    this.shoppinglistservice.addIngredients(newIngredient);
  }
}
