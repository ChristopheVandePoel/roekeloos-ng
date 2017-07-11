import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Post } from '../../../models/Post';
import { WpConnectService } from '../../../services/wp-connect.service';
import { MetaInjectService } from '../../../services/meta-inject.service';

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
    private router: Router,
    private metaInjectService: MetaInjectService
    ) {
      metaInjectService.setMetaTagsForHomePage();
   }

  ngOnInit() {
    this.wpService.getLatestPosts().subscribe(
      (posts: Post[]) => {
        this.posts = posts;
        this.mainPost = posts[0]});
  }

}
