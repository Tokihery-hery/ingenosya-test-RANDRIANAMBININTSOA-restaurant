import { Component, OnInit , Output, EventEmitter,} from '@angular/core';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  data:any
  @Output() search_fn = new EventEmitter();
  constructor() { }
  search_in:any
  ngOnInit(): void {
  }
  //emit function search_fn
  // (search_fn)="search($event) used in html other component , and create function called search($event:any) in ts file this component 
  search($event:any){
      this.search_in = $event.target.value
      this.search_fn.emit(this.search_in)
  }
}
