import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'film-service',
    loadChildren: () => import('./service/film-service/film-service.module').then( m => m.FilmServicePageModule)
  },
  // {
  //   path: 'tabs',
  //   loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  // },
  // {
  //   path: 'people',
  //   loadChildren: () => import('./pages/people/people.module').then( m => m.PeoplePageModule)
  // },
  // {
  //   path: 'planets',
  //   loadChildren: () => import('./pages/planets/planets.module').then( m => m.PlanetsPageModule)
  // },
  // {
  //   path: 'films',
  //   loadChildren: () => import('./pages/films/films.module').then( m => m.FilmsPageModule)
  // },
  // {
  //   path: 'film-details',
  //   loadChildren: () => import('./pages/film-details/film-details.module').then( m => m.FilmDetailsPageModule)
  // },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
