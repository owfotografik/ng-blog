import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { PostEditorComponent } from './components/post-editor/post-editor.component';

let myRoutes: Routes = [{
  path: '', component: HomeComponent, pathMatch: 'full'
}, {
  path: 'post/:id', component: PostComponent, pathMatch: 'full'
},{
  path: 'post/:id/edit', component: PostEditorComponent
}]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    PostEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      myRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
