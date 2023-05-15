import { Component, OnInit } from '@angular/core';
import { MobileFeaturedModel } from '../MODEL/featured.model';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'imageslider';

  slides: MobileFeaturedModel[] = [
    {
      img: 'assets/image/featured.png',
    },

    {
      img: 'assets/image/featured1.png',
    },

    {
      img: 'assets/image/featured.png',
    },

    {
      img: 'assets/image/featured1.png',
    },
  ];
  slideConfig = {
    "slidesToShow": 2,
    "slidesToScroll": 1,

    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 1000,
    'responsive': [
      {
        'breakpoint': 707,
        'settings': {
          'slidesToShow': 1
        }
      }
    ]
  };

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {

  }

  breakpoint(e: any) {

  }

  afterChange(e: any) {

  }

  beforeChange(e: any) {

  }


}
