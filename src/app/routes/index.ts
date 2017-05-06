import { Routes } from '@angular/router';

import { HomeContainerComponent } from '../components/home-container/home-container/home-container.component';
import { SinglePostContainerComponent } from '../components/single-post-container/single-post-container/single-post-container.component';

export const routes: Routes = [
  { path: 'home', component: HomeContainerComponent},
  { path: 'post/:id', component: SinglePostContainerComponent},
  { path: 'post/:id/:slug', component: SinglePostContainerComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full'} //needs 404
];