import { Component, OnInit } from '@angular/core';
import {TvService} from '../tv.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  shows: Array<Object>;
  searchResults: Array<Object>;

  keyWord: string;
  
  form: FormGroup;

  constructor(private _tvService: TvService, private formBuilder: FormBuilder) {
    this._tvService.getPopular().subscribe(res => {
      this.shows = res.results;
    });
  }

  ngOnInit() {

    this.form = this.formBuilder.group({
      search: [null, Validators.required]
    });
  }
  search(){
    this._tvService.search(this.keyWord).subscribe(res=>{
      this.searchResults = res.results; 
    })
  }
}
