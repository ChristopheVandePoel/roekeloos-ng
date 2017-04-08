import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { WpConnectService } from '../../../sevices/wp-connect.service';
import { Post } from '../../../models/Post';

@Component({
  selector: 'single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  post: Post;
  scrolledDown: boolean = false;

  @HostListener('window:scroll', ['$event'])
    track(event) {
        this.scrolledDown = (window.pageYOffset > this.elementRef.nativeElement.offsetTop);
        console.log(this.scrolledDown);
    }

  constructor(
      private wpService: WpConnectService,
      private route: ActivatedRoute,
      private router: Router,
      private elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.wpService.getPostById(+params['id']))
      .subscribe((post: Post) => this.post = post);
  }
}
