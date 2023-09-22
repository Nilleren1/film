import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmServicePageRoutingModule } from './film-service-routing.module';
import { FilmService } from './film-service.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmServicePageRoutingModule
  ],
 
})
export class FilmServicePageModule {}
