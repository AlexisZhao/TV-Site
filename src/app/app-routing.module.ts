import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { OnTvComponent } from './on-tv/on-tv.component';
import { AiringTodayComponent } from './airing-today/airing-today.component';
import { PopularComponent } from './popular/popular.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { SearchComponent } from './search/search.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';

 const routes: Routes = [
  { path: '', component: PopularComponent },
  { path: 'on-tv', component: OnTvComponent },
  { path: 'airing-today', component: AiringTodayComponent },
  { path: 'top-rated', component: TopRatedComponent },
  { path: 'search', component: SearchComponent },
  { path: 'show-detail/:id', component: ShowDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
