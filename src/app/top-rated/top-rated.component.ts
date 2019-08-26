import { Component, OnInit } from '@angular/core';
import {TvService} from '../tv.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {
  shows: Array<Object>;

  constructor(private _tvService: TvService) {
    this._tvService.getOnTV().subscribe(res => {
      this.shows = res.results;
    });
   }

  ngOnInit() {
  }

}
