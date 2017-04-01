import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Post } from '../models/Post';

@Injectable()
export class WpConnectService {

  constructor(public http: Http) { }

  public getLatestPosts(): Observable<Post[]> {
    return this.http.get('http://roekeloos-wp.be/api/get_recent_posts/')
      .map((response: Response) => {
        return(<any>response.json().posts.map((post) => {
          return new Post(post);
        }));
      });
  }
}
