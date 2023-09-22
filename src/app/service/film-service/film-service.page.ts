// film.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private films = [
    { id: 1, title: 'Film 1', description: 'Description for Film 1' },
    { id: 2, title: 'Film 2', description: 'Description for Film 2' },
    // Add more films as needed
  ];

  constructor() {}

  getFilms() {
    return this.films;
  }
}
