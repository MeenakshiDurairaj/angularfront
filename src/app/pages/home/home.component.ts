import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  featuredRecipes = [
    { title: 'Spaghetti Bolognese', image: 'assets/spaghetti.jpg' },
    { title: 'Veggie Stir Fry', image: 'assets/stirfry.jpg' },
    { title: 'Pancakes', image: 'assets/pancakes.jpg' }
  ];
}
