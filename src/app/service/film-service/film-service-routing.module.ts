import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmService } from './film-service.page';

const routes: Routes = [
  {
    path: '',
    component: FilmService
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmServicePageRoutingModule {}
