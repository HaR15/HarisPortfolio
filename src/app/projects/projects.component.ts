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
    },
    {
      title: 'Minimalistic Breakout',
      description: 'A minimalistic version of the classic "Breakout" game built using HTML5 canvas and JavaScript.',
      image: '../assets/MinimalisticBreakout.png',
      url: 'https://github.com/HaR15/Minimalistic-Breakout',
    },
    {
      title: 'DevSideProjects',
      description: 'Web app allowing project creators and developers to search and match based on preferences.',
      image: '../assets/MinimalisticBreakout.png',
      url: 'https://github.com/KathyTheTurtle/DevSideProjects',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
