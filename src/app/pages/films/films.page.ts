import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FilmService } from 'src/app/service/film-service/film-service.page';


@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  films: { id: number; title: string; description: string }[] = [];



  constructor(private navController: NavController, private router: Router, private filmService: FilmService) { }

  ngOnInit() {
    // Fetch films from the service
    // this.films = this.filmService.getFilms();
  }

  openDetails() {
    this.films = this.filmService.getFilms();
  }

  goToPlanets() {
    this.navController.navigateRoot(`/tabs/planets`)
  }

}