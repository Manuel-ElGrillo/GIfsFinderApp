import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historal: string[] = [];
  private apiKey: string = "B7YGoYL0ho0FeRepyi3456MeM1v11NJw";
  private URL: string = "https://api.giphy.com/v1/gifs/search?";
  public output: any[] = [];

  constructor( private http: HttpClient ) { }

  get historial () {
    return [...this._historal]; 
  }

  findGifs ( query: string ) { 
    
    // limiting the array results to 10
    this._historal = this._historal.splice(0,10);

    //Avoiding repeat results
    if ( !this._historal.includes( query ) ) {
      this._historal.unshift( query );
    }

    this.http.get(`${this.URL}api_key=${this.apiKey}&q=${query}`)
      .subscribe( (resp: any) => {
        console.log(resp.data);
        this.output = resp.data;
      })

  }

}
