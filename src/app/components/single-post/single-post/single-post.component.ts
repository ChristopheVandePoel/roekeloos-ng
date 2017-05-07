import { Component, ElementRef } from '@angular/core';
import {Router} from '@angular/router';

import { WpConnectService } from '../../../services/wp-connect.service';
import { Post } from '../../../models/Post';

@Component({
  selector: 'single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
  inputs: ['post']
})
export class SinglePostComponent {
  post: Post;

  constructor(
      private elementRef: ElementRef,
      private router: Router
  ) { }


  goToPost(): void {
    this.router.navigate(['/post', this.post.id, this.post.slug]);
  }
}
