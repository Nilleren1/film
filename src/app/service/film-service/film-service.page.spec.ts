import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilmServicePage } from './film-service.page';

describe('FilmServicePage', () => {
  let component: FilmServicePage;
  let fixture: ComponentFixture<FilmServicePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FilmServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
