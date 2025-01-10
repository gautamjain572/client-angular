import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  imports: [CommonModule, CarouselModule, MatCardModule]
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
