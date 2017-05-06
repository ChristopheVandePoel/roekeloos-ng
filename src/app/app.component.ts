import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, NavigationEnd } from '@angular/router';
import { Angulartics2GoogleAnalytics } from 'angulartics2';
import { isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

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
    private title: Title,
    private meta: Meta ){
      this.alwaysScrollToTopEventListener();
      this.title.setTitle('Roekeloos.be');
      this.meta.addTags([
        {name: "description", content:"For the love of Code and Proze"},
        {itemprop: "name", content:"Roekeloos.be"},
        {itemprop: "description", content:"For the love of Code and Proze"},
        {itemprop: "image", content:"/assets/logo.png"},
        {name: "twitter:card", content:"summary"},
        {name: "twitter:site", content:"@ChristopheVdP"},
        {name: "twitter:title", content:"Roekeloos.be"},
        {name: "twitter:description", content:"For the love of Code and Proze"},
        {name: "twitter:creator", content:"@ChristopheVdP"},
        {name: "twitter:image:src", content:"http://roekeloos.be/assets/logo.png"},
        {property: "og:title", content: "Roekeloos.be"},
        {property: "og:type", content: "Homepage"},
        {property: "og:url", content: "http://roekeloos.be"},
        {property: "og:image", content: "/assets/logo.png"},
        {property: "og:description", content: "For the love of Code and Proze"},
        {property: "og:site_name", content: "Roekeloos.be"}
      ])
  }

  // very very basic scrolltop for routechanges. Doesn't handle 'back' button yet.
  alwaysScrollToTopEventListener() {
    this.router.events.subscribe((event) => {
      (event instanceof NavigationEnd && isPlatformBrowser(this.platformId)) ? window.scrollTo(0, 0) : null;
    });
  }

  ngOnInit() {
  }
}
