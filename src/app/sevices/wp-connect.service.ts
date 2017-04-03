import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Post } from '../models/Post';
import { Author } from '../models/Author';
import config from '../injectables/constants';
import { environment } from '../../environments/environment';

@Injectable()
export class WpConnectService {

    apiRoot: string;

  // these will hold the Observables. Returning cached results if they can. 
  latestPosts: {[id: number]: Post} = {};
  authors: {[id: number]: Observable<Author>} = {};

  constructor(public http: Http) { 
    this.apiRoot = config.devConfig.apiRoot
    
    if (environment.production) {
      this.apiRoot = config.prodConfig.apiRoot
    }
  }

  // This method will be a bit different from the others for now. I see no reason yet to fetch posts seperately if we want a list.
  public getLatestPosts(force: boolean = false): Observable<Post[]> {
    return this.http.get(`${this.apiRoot}posts`)
      .map((response: Response) => {
        return(<any>response.json().map((post) => {
          let fullPost = new Post(post);
          
          // the following line is messy. But handy. It keeps the controller-side clean, so we do not have to chain calls.
          // we are, however mutating data after it's been sent (because getAuthorById is async). 
          // Javascript lets us do this. Good indicator that we probably shouldn't.

          this.getAuthorById(post.author, force).subscribe((author: Author) => fullPost.setPostAuthor(author));
          this.latestPosts[fullPost.id] = fullPost;
          return fullPost;
        }));
      });
  }

  public getAuthorById(id: number, force: boolean = false): Observable<Author> {
    if(!this.authors[id] || force){
      this.authors[id] = this.http.get(`${this.apiRoot}users/${id}`)
        .map((author: Response) => {
            let fullAuthor = new Author(author.json());
            return fullAuthor;
        })
        .publishReplay(1)
        .refCount();
    }
    return this.authors[id];
  }
}
