import { Component, OnInit } from '@angular/core';
import {TvService} from '../tv.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {
  show: Object;

  constructor( private _tvServices: TvService, private router: ActivatedRoute,) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this._tvServices.getDetails(id).subscribe(show => {
        this.show = show;
      });})
    }
}
