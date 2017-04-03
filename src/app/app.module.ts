import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostPreviewComponent } from './components/post-preview/post-preview.component';
import {WpConnectService} from './sevices/wp-connect.service';
import { ClearComponent } from './components/clear/clear.component';

import { SafeHtml } from './pipes/safeHtml.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostPreviewComponent,
    ClearComponent,
    SafeHtml
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WpConnectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
