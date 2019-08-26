import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
//old way 
import { HttpModule, JsonpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// import { routes } from './app-routing.module'

import { AppComponent } from './app.component';
import { PopularComponent } from './popular/popular.component';
import { OnTvComponent } from './on-tv/on-tv.component';
import { AiringTodayComponent } from './airing-today/airing-today.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { SearchComponent } from './search/search.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';
// import { App } from './/app.routes.module';


@NgModule({
  declarations: [
    AppComponent,
    PopularComponent,
    OnTvComponent,
    AiringTodayComponent,
    TopRatedComponent,
    SearchComponent,
    ShowDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    //new way
    HttpClientModule, 
    HttpClientJsonpModule,
    //old way
    HttpModule,
    JsonpModule,
    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
