import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, NavigationEnd } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router){
    this.alwaysScrollToTopEventListener();
  }

  // very very basic scrolltop for routechanges. Doesn't handle 'back' button yet.
  alwaysScrollToTopEventListener() {
    this.router.events.subscribe((event) => {
      (event instanceof NavigationEnd) ? window.scrollTo(0, 0) : null;
    });
  }

  ngOnInit() {

  }
}
