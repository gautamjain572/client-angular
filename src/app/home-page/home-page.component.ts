import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-page',
  standalone: false,

  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  slidesStore: any[] = [
    {
      id: '1',
      src: "/client/public/i1.jpg",
      alt: 'hello',
      title: 'clothes',
    },
    {
      id: '2',
      src: 'i1.jpg',
      alt: 'hello',
      title: 'clothes',
    }, {
      id: '3',
      src: 'i1.jpg',
      alt: 'hello',
      title: 'clothes',
    }, {
      id: '4',
      src: 'i1.jpg',
      alt: 'hello',
      title: 'clothes',
    }, {
      id: '5',
      src: 'i1.jpg',
      alt: 'hello',
      title: 'clothes',
    }, {
      id: '6',
      src: 'i1.jpg',
      alt: 'hello',
      title: 'clothes',
    },
  ]
}
