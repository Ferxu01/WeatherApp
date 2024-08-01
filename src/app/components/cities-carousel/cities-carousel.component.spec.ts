import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesCarouselComponent } from './cities-carousel.component';

describe('CitiesCarouselComponent', () => {
  let component: CitiesCarouselComponent;
  let fixture: ComponentFixture<CitiesCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitiesCarouselComponent]
    });
    fixture = TestBed.createComponent(CitiesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
