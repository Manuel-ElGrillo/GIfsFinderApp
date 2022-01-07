import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchComponent } from './search/search.component';
import { GifResultsComponent } from './gif-results/gif-results.component';



@NgModule({
  declarations: [
    MainPageComponent,
    SearchComponent,
    GifResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class GifFinderModule { }
