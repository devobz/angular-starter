import { Component, OnInit } from '@angular/core';
import { environment as env } from '@env/environment';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  title = env.title;

  constructor() { }

  ngOnInit(): void {
  }

}
