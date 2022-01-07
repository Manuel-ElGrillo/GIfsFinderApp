import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gif-results',
  templateUrl: './gif-results.component.html',
  styleUrls: ['./gif-results.component.css']
})
export class GifResultsComponent implements OnInit {

  constructor( private gifService: GifsService ) { }

  get results () {
    return this.gifService.output;
  }

  ngOnInit(): void {
  }

}
