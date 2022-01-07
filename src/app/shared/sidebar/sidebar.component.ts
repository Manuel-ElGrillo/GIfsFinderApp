import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gif-finder/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( private gifService: GifsService) { }

  ngOnInit(): void {
  }

  get historialSearch () {
    return this.gifService.historial;
  }

  // Getting GIFs from sidebar
  findGifs(query: string) {
    this.gifService.findGifs(query);
  }  

}
