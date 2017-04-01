/*
 * Angular
 */
import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts: Object[];

  // inject http
  constructor(public http: Http){
  }

  ngOnInit() {
    console.log('App init');
    this.http.request('http://roekeloos-wp.be/api/get_recent_posts/')
      .subscribe((res: Response) => {
        console.log('Response from api:', res.json());
        if(res.json().posts.length > 0 ){
          console.log(`I wil render ${res.json().posts.length} posts`);
          this.posts = res.json().posts;
        }
      });
  }
}
