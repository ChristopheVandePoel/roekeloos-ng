import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector:'social-ribbon',
    templateUrl: './social-ribbon.component.html',
    styleUrls: ['./social-ribbon.component.css'],
    inputs: ['direction', 'ribbonRoute', 'text']
})
export class SocialRibbon implements OnInit {
    direction: string;
    ribbonRoute: string;
    routeToContent: string;
    text: string;
    className: string;

    constructor(private router: Router) {
    }
    ngOnInit(){
        if (!this.ribbonRoute) {
            this.routeToContent = 'http://roekeloos.be' + this.router.url;
        } else {
            this.routeToContent = 'http://roekeloos.be/post/' + this.ribbonRoute;
        };
        this.className = `social-ribbon--container__${this.direction}`;
    }
}
