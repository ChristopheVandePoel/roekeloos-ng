import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { PostPreviewComponent } from './components/post-preview/post-preview.component';
import {WpConnectService} from './sevices/wp-connect.service';
import { ClearComponent } from './components/clear/clear.component';

import { SafeHtml } from './pipes/safeHtml.pipe';
import { HeaderComponent } from './components/header/header/header.component';
import { PlaceholderComponent } from './components/placeholder/placeholder/placeholder.component';
import { MenuComponent } from './components/menu/menu/menu.component';
import { LatestPostsComponent } from './components/latest-posts/latest-posts/latest-posts.component';
import { SinglePostComponent } from './components/single-post/single-post/single-post.component';
import { WatchScrollDirective } from './directives/watch-scroll/watch-scroll.directive';

const routes: Routes = [
  { path: 'post/:id', component: SinglePostComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LatestPostsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PostPreviewComponent,
    ClearComponent,
    SafeHtml,
    HeaderComponent,
    PlaceholderComponent,
    MenuComponent,
    LatestPostsComponent,
    SinglePostComponent,
    WatchScrollDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    WpConnectService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
