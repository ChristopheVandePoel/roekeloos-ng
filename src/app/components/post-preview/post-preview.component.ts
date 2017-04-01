import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css'],
  inputs: ['post']
})
export class PostPreviewComponent implements OnInit {
  post: Object;
  
  constructor() { }

  ngOnInit() {
  }

}
