import {Ingredient} from "../models/ingredient";
/**
 * Created by hungbm on 5/25/2017.
 */
export class ShoppingListService {
  private ingredients: Ingredient[] = [];

  addItem(name: string, amount: number){
    this.ingredients.push(new Ingredient(name,amount));
    console.log(this.ingredients);
  }

  addItems(items: Ingredient[]){
    this.ingredients.push(...items); //break input array to multi items and add to array
  }

  getItems(){
    return this.ingredients.slice(); //Create and return original array, not the reference
  }

  removeItem(index: number){
    this.ingredients.splice(index,1);
  }
}
