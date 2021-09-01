import {AfterViewInit, Component, ViewChild,OnInit, Input} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


export interface UserData {
  images:string;
  name: string;
  quantity: string;
  montant:any;
  priceUi:any
  availability: string;
}
@Component({
  selector: 'app-visualize-ingredient-needs',
  templateUrl: './visualize-ingredient-needs.component.html',
  styleUrls: ['./visualize-ingredient-needs.component.css']
})
export class VisualizeIngredientNeedsComponent implements OnInit, AfterViewInit{


  displayedColumns: string[] = ['image', 'name', 'quantity', 'priceUi','montant', 'availability'];
  @Input() data:UserData[]|any
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator |any;
  @ViewChild(MatSort) sort: MatSort|any;

  constructor() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.data);

  }
  ngAfterViewInit(){
       this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }
  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  saling(){

  }
  editPrice(){

  }
}

