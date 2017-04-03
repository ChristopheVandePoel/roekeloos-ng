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

  constructor(public http: Http) { 
    this.apiRoot = config.devConfig.apiRoot
    
    if (environment.production) {
      this.apiRoot = config.prodConfig.apiRoot
    }
  }

  public getLatestPosts(): Observable<Post[]> {
    return this.http.get(`${this.apiRoot}posts`)
      .map((response: Response) => {
        return(<any>response.json().map((post) => {
          let fullPost = new Post(post);
          // this seems messy. But handy. It keeps the controller clean, so we do not have to chain calls.
          this.getAuthorById(post.author).subscribe((author: Author) => fullPost.setPostAuthor(author))
          return fullPost;
        }));
      });
  }

  public getAuthorById(id: number): Observable<Author> {
    return this.http.get(`${this.apiRoot}users/${id}`)
      .map((author: Response) => {
          return new Author(author.json());
      });
  }
}
