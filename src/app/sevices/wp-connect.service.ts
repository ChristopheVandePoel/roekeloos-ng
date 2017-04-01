import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Post } from '../models/Post';
import config from '../injectables/constants';
import { environment } from '../../environments/environment';

@Injectable()
export class WpConnectService {
  apiRoot: string;

  constructor(public http: Http) { 
    this.apiRoot = config.devConfig.apiRoot
    
    if (environment.production) {
      this.apiRoot = config.prodConfig.apiRoot
    }
  }

  public getLatestPosts(): Observable<Post[]> {
    return this.http.get(`${this.apiRoot}get_recent_posts/`)
      .map((response: Response) => {
        return(<any>response.json().posts.map((post) => {
          return new Post(post);
        }));
      });
  }
}
