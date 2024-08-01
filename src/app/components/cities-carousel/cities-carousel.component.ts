import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { City } from 'src/app/interfaces/Weather';

@Component({
  selector: 'app-cities-carousel',
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

  calculateItemWidth() {
    const carousel = this.carousel.nativeElement;
    const visibleItems = Math.floor(carousel.offsetWidth / carousel.children[0].clientWidth);
    this.itemWidth = carousel.offsetWidth / visibleItems;
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
    //let itemWidth = carousel.scrollWidth / this.cities.length;
    //console.log(itemWidth*2);
    //itemWidth = 290;
    carousel.scrollTo({
      left: this.index * this.itemWidth,
      behavior: 'smooth'
    });
  }
}
