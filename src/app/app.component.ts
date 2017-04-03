/*
 * Angular
 */
import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Post } from './models/Post';
import { WpConnectService } from './sevices/wp-connect.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts: Post[];

  // inject wordpress connection service
  constructor(private wpService: WpConnectService){
  }

  ngOnInit() {
    this.wpService.getLatestPosts().subscribe(
      (posts: Post[]) => {this.posts = posts});
  }
}
