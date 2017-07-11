import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { MetaInjectService } from '../../../services/meta-inject.service';

import { WpConnectService } from '../../../services/wp-connect.service';
import { Post } from '../../../models/Post';
import { Media } from '../../../models/Media';

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
      private router: Router,
      private metaInjectService: MetaInjectService ) {
  }

  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.wpService.getPostById(+params['id']))
      .subscribe((post: Post) => {
        this.post = post;
        if(post.mediaId){
          this.wpService.getMediaById(post.mediaId)
            .subscribe((media: Media) => {
              this.metaInjectService.setMetaTagsForPost({image: media.url})
          });
        } else {
          this.metaInjectService.setMetaTagsForPost({image: null})
        }

        this.metaInjectService.setMetaTagsForPost({title: post.title, description: post.description});
    });
  }
}
