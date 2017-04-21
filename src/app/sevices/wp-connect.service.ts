import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

import { Post } from '../models/Post';
import { Author } from '../models/Author';
import { Media } from '../models/Media';
import config from '../injectables/constants';
import { environment } from '../../environments/environment';

@Injectable()
export class WpConnectService {

  apiRoot: string;

  // these will hold the Observables. Returning cached results if they can. 
  posts: {[id: number]: Observable<Post>} = {};
  authors: {[id: number]: Observable<Author>} = {};
  media: {[id: number]: Observable<Media>} = {};

  /**
   * 
   * @param http 
   */
  constructor( @Inject(PLATFORM_ID) private platformId: Object, public http: Http) { 
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
          let fullPost = new Post(isPlatformBrowser(this.platformId), post);
          
          // the following line is messy. But handy. It keeps the controller-side clean, so we do not have to chain calls.
          // we are, however mutating data after it's been sent (because getAuthorById is async). 
          // Javascript lets us do this. Good indicator that we probably shouldn't.

          this.getAuthorById(post.author, force).subscribe((author: Author) => fullPost.setPostAuthor(author));
          if(post.custom_meta && post.custom_meta.imageID) {
            this.getMediaById(post.custom_meta.imageID, force).subscribe((media: Media) => fullPost.setPostMedia(media));
          }
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
          let fullPost = new Post(isPlatformBrowser(this.platformId), post.json());
          this.getAuthorById(post.json().author, force).subscribe((author: Author) => fullPost.setPostAuthor(author));
          console.log(post.json());
          if(post.json().custom_meta && post.json().custom_meta.imageID) {
            this.getMediaById(post.json().custom_meta.imageID, force).subscribe((media: Media) => fullPost.setPostMedia(media));
          }
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

  public getMediaById(id: number, force: boolean = false): Observable<Media> {
    if(!this.media[id] || force){
      this.media[id] = this.http.get(`${this.apiRoot}media/${id}`)
        .map((media: Response) => {
          return new Media(media.json());
        })
        .publishReplay(1)
        .refCount();
      return this.media[id];
    } else {
      return this.media[id];
    }
  }
}
