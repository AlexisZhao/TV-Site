import { Component, OnInit } from '@angular/core';
import {TvService} from '../tv.service';

@Component({
  selector: 'app-airing-today',
  templateUrl: './airing-today.component.html',
  styleUrls: ['./airing-today.component.css']
})
export class AiringTodayComponent implements OnInit {
  shows: Array<Object>;

  constructor(private _tvService: TvService) { 
    this._tvService.getAiringToday().subscribe(res => {
      this.shows = res.results;
    });
  }

  ngOnInit() {
  }

}
