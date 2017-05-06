import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Post } from '../../../models/Post';
import { WpConnectService } from '../../../services/wp-connect.service';


@Component({
  selector: 'latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css'],
  inputs: ['posts']
})
export class LatestPostsComponent implements OnInit {
  posts: Post[];
  constructor(
    private wpService: WpConnectService,
    private router: Router
    ) {
   }

  ngOnInit() {
  }

  goToPost(id: string, slug: string): void {
    this.router.navigate(['/post', id, slug]);
  }

}
