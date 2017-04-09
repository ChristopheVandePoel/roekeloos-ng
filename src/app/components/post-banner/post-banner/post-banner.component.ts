import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post-banner',
  templateUrl: './post-banner.component.html',
  styleUrls: ['./post-banner.component.css'],
  inputs: ['imageUrl']
})
export class PostBannerComponent implements OnInit {
  imageUrl: string;
  
  constructor() { }

  ngOnInit() {
  }

}
