import { Component } from '@angular/core';
import {TvService} from './tv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TvService]
})
export class AppComponent {
  title = 'app';

  
}
