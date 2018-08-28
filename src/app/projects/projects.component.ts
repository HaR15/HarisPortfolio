import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: object = [
    {
      title: 'What2Watch',
      description: 'React.js web app that dynamically updates a list of movie results based on selected filters such as year, genre, IMDb rating, and Rotten Tomatoes rating. Each result shows more movie details.',
      image: '../assets/What2WatchPic.png',
      url: 'https://github.com/HaR15/what2watch',      
      role: '',
      stack: ''
    },
    {
      title: 'Minimalistic Breakout',
      description: 'A minimalistic version of the classic "Breakout" game built using HTML5 canvas and JavaScript.',
      image: '../assets/MinimalisticBreakout.png',
      url: 'https://github.com/HaR15/Minimalistic-Breakout',
      role: '',
      stack: ''
    },
    {
      title: 'DevSideProjects',
      description: 'Web app allowing project creators and developers to search and match based on preferences.',
      image: '../assets/DevSideProjects.png',
      url: 'https://github.com/KathyTheTurtle/DevSideProjects',
      role: 'Implemented the front-end for the Developer Search and Project Search features.',
      stack: ''
    },
    {
      title: 'Baseball Cards E-store',
      description: 'An e-commerce store for viewing and purchasing baseball cards in-stock.',
      image: '../assets/BaseballEstore.png',
      url: 'https://github.com/HaR15/estore',
      role: 'Implemented admin operations for inventory management, items list, shopping cart, checkout.',
      stack: ''
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
