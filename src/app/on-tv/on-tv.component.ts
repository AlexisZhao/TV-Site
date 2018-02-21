import { Component, OnInit } from '@angular/core';
import {TvService} from '../tv.service';

@Component({
  selector: 'app-on-tv',
  templateUrl: './on-tv.component.html',
  styleUrls: ['./on-tv.component.css']
})
export class OnTvComponent implements OnInit {
  shows: Array<Object>;
  
  constructor(private _tvService: TvService) { 
    this._tvService.getOnTV().subscribe(res => {
      this.shows = res.results;
    });
  }

  ngOnInit() {
  }

}
