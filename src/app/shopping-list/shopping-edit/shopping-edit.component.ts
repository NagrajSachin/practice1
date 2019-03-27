import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountRef : ElementRef;
  @Output() listEmitted = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onInput(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);
    this.listEmitted.emit(newIngredient);
  }
}
