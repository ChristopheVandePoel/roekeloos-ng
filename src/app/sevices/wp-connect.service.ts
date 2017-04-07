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
  posts: {[id: number]: Observable<Post>} = {};
  authors: {[id: number]: Observable<Author>} = {};

  /**
   * 
   * @param http 
   */
  constructor(public http: Http) { 
    this.apiRoot = config.devConfig.apiRoot
    
    if (environment.production) {
      this.apiRoot = config.prodConfig.apiRoot
    }
  }

  /**
   * @param force 
   */
  public getLatestPosts(force: boolean = false): Observable<Post[]> {
    return this.http.get(`${this.apiRoot}posts`)
      .map((response: Response) => {
        return(<any>response.json().map((post) => {
          let fullPost = new Post(post);
          
          // the following line is messy. But handy. It keeps the controller-side clean, so we do not have to chain calls.
          // we are, however mutating data after it's been sent (because getAuthorById is async). 
          // Javascript lets us do this. Good indicator that we probably shouldn't.

          this.getAuthorById(post.author, force).subscribe((author: Author) => fullPost.setPostAuthor(author));
          this.posts[fullPost.id] = Observable.of(fullPost);
          return fullPost;
        }));
      });
  }

  /**
   * 
   * @param id 
   * @param force 
   */
  public getPostById(id: number, force: boolean = false): Observable<Post> {
    if(!this.posts[id] || force){
      this.posts[id] = this.http.get(`${this.apiRoot}posts/${id}`)
        .map((post: Response) => {
          let fullPost = new Post(post.json());
          this.getAuthorById(post.json().author, force).subscribe((author: Author) => fullPost.setPostAuthor(author));
          return fullPost;
        })
        .publishReplay(1)
        .refCount();
      return this.posts[id];

    } else {
      return this.posts[id];
    }
  }

  /**
   * 
   * @param id 
   * @param force 
   */
  public getAuthorById(id: number, force: boolean = false): Observable<Author> {
    if(!this.authors[id] || force){
      this.authors[id] = this.http.get(`${this.apiRoot}users/${id}`)
        .map((author: Response) => {
            return new Author(author.json());
        })
        .publishReplay(1)
        .refCount();
      return this.authors[id]; 
    } else {
      return this.authors[id];
    }
  }
}
