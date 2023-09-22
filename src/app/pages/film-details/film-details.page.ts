import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {

  // filmId: string | null = null;
  filmId: number;
  films: any; // Define the film object here

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // Retrieve the filmId from the route parameter
    this.filmId = +this.activatedRoute.snapshot.paramMap.get('id');

    // Find the selected film from the films array
    this.films = this.films.find((films: any) => films.id === this.filmId);
  }

}