import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

import config from '../injectables/constants';
import { environment } from '../../environments/environment';

@Injectable()
export class SendMailService {

  mailRoot: string;

  constructor( @Inject(PLATFORM_ID) private platformId: Object, public http: Http) {
    this.mailRoot = config.devConfig.apiRoot;
    if (environment.production) {
      this.mailRoot = config.prodConfig.apiRoot;
    }
  }

  public sendMail( data: any ): Observable<any> {
    // this works! now change it to something sensible that will work on a server.
    return this.http.post(this.mailRoot, data)
      .map((resp) => "Whu")
      .catch((error: any) => error);
  }
}
