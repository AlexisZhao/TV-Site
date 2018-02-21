// import { Injectable } from '@angular/core';
// // Import HttpClient class
// import { HttpClient, HttpParams  } from '@angular/common/http';
// import {Observable} from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {Jsonp, URLSearchParams} from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class TvService {
  api_key: string;
  
  constructor(private _jsonp: Jsonp) {
    this.api_key = '6dbe3659ed6495b232f564621c2ac23c';
    console.log('Movies service is ready');
   }
  

  search(keyWord:string){
    var search = new URLSearchParams();
    search.set('query', keyWord);
    search.set('api_key', this.api_key);
    return this._jsonp.get('https://api.themoviedb.org/3/search/tv?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getAiringToday() {
    var search = new URLSearchParams();
    search.set('api_key', this.api_key);
    return this._jsonp.get('https://api.themoviedb.org/3/tv/airing_today?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getOnTV(){
    var search = new URLSearchParams();
    search.set('api_key', this.api_key);
    return this._jsonp.get(' https://api.themoviedb.org/3/tv/on_the_air?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getPopular() {
    var search = new URLSearchParams();
    search.set('api_key', this.api_key);
    return this._jsonp.get('https://api.themoviedb.org/3/tv/popular?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getDetails(id:string) {
    var search = new URLSearchParams();
    search.set('api_key', this.api_key);
    return this._jsonp.get('https://api.themoviedb.org/3/tv/'+ id +'?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

}
