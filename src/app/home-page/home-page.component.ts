import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: false,

  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  categories = [
    { name: 'Category 1', imageUrl: 'i1.jpg' },
    { name: 'Category 2', imageUrl: 'i2.png' },
    { name: 'Category 3', imageUrl: 'i3.jpg' },
    { name: 'Category 4', imageUrl: 'i4.jpg' },
    { name: 'Category 5', imageUrl: 'i5.png' },
    { name: 'Category 6', imageUrl: 'i6.png' }
  ];

}
