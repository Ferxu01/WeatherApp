import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { City } from 'src/app/interfaces/Weather';

@Component({
  selector: 'Cities-carousel',
  templateUrl: './cities-carousel.component.html',
  styleUrls: ['./cities-carousel.component.css']
})
export class CitiesCarouselComponent implements OnInit {
  @Input() cities !: City[];
  @ViewChild('carousel', { static: true }) carousel!: ElementRef<HTMLDivElement>;

  index: number = 0;
  itemWidth: number = 300;

  ngOnInit(): void {
    this.carousel.nativeElement.scrollTo({
      left: 0,
      behavior: 'instant'
    });
  }

  nextItem() {
    this.index++;

    if (this.index >= this.cities.length) {
      this.index = 0;
    }

    this.scrollToIndex();
  }

  previousItem() {
    this.index--;

    if (this.index < 0) {
      this.index = this.cities.length - 1;
    }

    this.scrollToIndex();
  }

  private scrollToIndex() {
    const carousel = this.carousel.nativeElement;

    console.log(this.index * this.itemWidth + this.index * 20);
    const TEST_DATA = this.index * this.itemWidth + this.index * 20;

    carousel.scrollTo({
      left: TEST_DATA,
      behavior: 'smooth'
    });
  }
}
