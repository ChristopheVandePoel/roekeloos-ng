import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { WpConnectService } from '../../../services/wp-connect.service';
import { Post } from '../../../models/Post';

@Component({
  selector: 'single-post-container',
  templateUrl: './single-post-container.component.html',
  styleUrls: ['./single-post-container.component.css']
})
export class SinglePostContainerComponent implements OnInit {
  post: Post;
  
  constructor(      
      private wpService: WpConnectService,
      private route: ActivatedRoute,
      private router: Router,) { 
  }

  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.wpService.getPostById(+params['id']))
      .subscribe((post: Post) => this.post = post);
  }

}
