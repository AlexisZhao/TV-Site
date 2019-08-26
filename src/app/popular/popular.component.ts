import { Component, OnInit } from '@angular/core';
import {TvService} from '../tv.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  shows: Array<Object>;

  constructor(private _tvService: TvService) {
    this._tvService.getPopular().subscribe(res => {
      this.shows = res.results;
    });
  }

  ngOnInit() {
  }



}
