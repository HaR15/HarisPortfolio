import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutText: string = "I have been captivated by front-end development since I started in a junior web developer role at my university in 2013. Being able to create something beautiful from something mostly technical is what truly amazes me. I have worked on several web development projects and jobs ever since to own the joy of learning new things and making things look good. When I am not coding, I like listening to podcasts (Syntax.fm is awesome), playing basketball, ping-pong, and spending time with loved ones.  "
  aboutPic: string = "../assets/HarisPic.png"

  constructor() { }

  ngOnInit() {
  }

}
