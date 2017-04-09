import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Post } from '../../../models/Post';
import { WpConnectService } from '../../../sevices/wp-connect.service';

@Component({
  selector: 'home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  posts: Post[];
  mainPost: Post;
  constructor(
    private wpService: WpConnectService,
    private router: Router
    ) {
   }

  ngOnInit() {
    this.wpService.getLatestPosts().subscribe(
      (posts: Post[]) => {
        this.posts = posts
        this.mainPost = posts[0]});
  }

}
