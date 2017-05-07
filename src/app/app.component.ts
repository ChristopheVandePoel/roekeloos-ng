import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

import { Angulartics2GoogleAnalytics } from 'angulartics2';
import { MetaInjectService } from './services/meta-inject.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    private router: Router,
    private metaInjectService: MetaInjectService ){
      this.newRouteEventListener();
      this.metaInjectService.setMetaTagsForHomePage();
  }

  // very very basic scrolltop for routechanges. Doesn't handle 'back' button yet.
  newRouteEventListener() {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd && isPlatformBrowser(this.platformId)){
        window.scrollTo(0, 0);
        this.metaInjectService.setMetaTagsForPost({url: event.url})
        console.log('event:', event.url)
      }
    });
  }

  ngOnInit() {
  }
}
