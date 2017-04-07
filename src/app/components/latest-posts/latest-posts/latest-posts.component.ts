import { Component, OnInit } from '@angular/core';
import { Post } from '../../../models/Post';
import { WpConnectService } from '../../../sevices/wp-connect.service';


@Component({
  selector: 'latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {
  posts: Post[];
  constructor(private wpService: WpConnectService) { }

  ngOnInit() {
    this.wpService.getLatestPosts().subscribe(
      (posts: Post[]) => {this.posts = posts});
  }

}
