import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';

let myRoutes: Routes = [{
  path: '', component: HomeComponent, pathMatch: 'full'
}, {
  path: 'post/:id', component: PostComponent
}]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      myRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
