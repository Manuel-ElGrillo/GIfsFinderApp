import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private gifsService: GifsService ) { }

  ngOnInit(): void {
  }

  @ViewChild("txtSearch") txtSearch!: ElementRef<HTMLInputElement>;

  search(query: any){
    const value = this.txtSearch.nativeElement.value;
    // console.log (value);


    //Controlling empty querys
    if( value.trim().length === 0) {
      return;
    }

    this.txtSearch.nativeElement.value = "";

    this.gifsService.findGifs(value);
  }

}
