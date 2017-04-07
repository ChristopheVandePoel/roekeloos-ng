import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostPreviewComponent } from './components/post-preview/post-preview.component';
import {WpConnectService} from './sevices/wp-connect.service';
import { ClearComponent } from './components/clear/clear.component';

import { SafeHtml } from './pipes/safeHtml.pipe';
import { HeaderComponent } from './components/header/header/header.component';
import { PlaceholderComponent } from './components/placeholder/placeholder/placeholder.component';
import { MenuComponent } from './components/menu/menu/menu.component';
import { LatestPostsComponent } from './components/latest-posts/latest-posts/latest-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    PostPreviewComponent,
    ClearComponent,
    SafeHtml,
    HeaderComponent,
    PlaceholderComponent,
    MenuComponent,
    LatestPostsComponent
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
