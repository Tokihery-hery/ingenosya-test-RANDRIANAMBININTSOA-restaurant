import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, startWith } from 'rxjs/operators';
import {FormBuilder, FormControl, FormGroup, FormArray, Validators} from '@angular/forms';


export interface State {
  flag: string;
  name: string;
  quantity_available: string;
}




@Component({
  selector: 'app-foods-managment',
  templateUrl: './foods-managment.component.html',
  styleUrls: ['./foods-managment.component.css']
})
export class FoodsManagmentComponent implements OnInit {

   /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  productKey=""
  productListfiltered: any;
  product_name = new FormControl([])
  foods:FormGroup
  constructor(private breakpointObserver: BreakpointObserver, private readonly fb: FormBuilder) {
    this.foods = this.fb.group({
    'name':new FormControl([]),
    'ingredients':this.fb.array([]) 
  })
    this.productListfiltered = this.productLists

    }
  productLists: State[] = [
    {
      name: 'Humberger',
      quantity_available: '2.978',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'California',
      quantity_available: '39.14',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Frite',
      quantity_available: '20.27',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/frites-maison-2079752/22101092-2-fre-FR/Frites-maison.jpg'
    },
    {
      name: 'Texas',
      quantity_available: '27.47',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];


  ngOnInit(): void {
  }


  get ingredients(){
    return this.foods.controls['ingredients'] as FormArray
  }

  private _filterProductLists(value: string): State[] {
      const filterValue = value.toLowerCase();

    return this.productLists.filter(product => product.name.toLowerCase().includes(filterValue));
  }
  onChangeProduct = async ($event:any)=>{
    if($event){
          this.productListfiltered = await this._filterProductLists($event)
          this.productKey = $event
    }else{
      this.productListfiltered = this.productLists
    }
  }
  addIngredient(){
    let ingredientsForm = this.fb.group({
        "product_name": ['', Validators.required],
        "quantity":['', Validators.required],
      })
      this.ingredients.push(ingredientsForm)
      this.productListfiltered = this.productLists
  }
  removeIngredient(ingredientsIndex:number){
    this.ingredients.removeAt(ingredientsIndex)
  }

  addAndSeeFoodDetails(){
      console.log(this.foods.controls)
  }
  addAndNewFood(){
          console.log("acheteo ooo")
  }
  makeSale(){
      console.log(this.productKey)
  }
}
