import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import {FormsModule } from '@angular/forms';
=======
import { FormsModule } from '@angular/forms'
>>>>>>> 11dd73f7a28775edbf12a55db6a66370b5a2fc79
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
<<<<<<< HEAD
import { PosteditorComponent } from './components/posteditor/posteditor.component'
=======
import { PostEditorComponent } from './components/post-editor/post-editor.component';
>>>>>>> 11dd73f7a28775edbf12a55db6a66370b5a2fc79

let myRoutes: Routes = [{
  path: '', component: HomeComponent, pathMatch: 'full'
}, {
  path: 'post/:id', component: PostComponent, pathMatch: 'full'
},{
<<<<<<< HEAD
  path: 'post/:id/edit', component: PosteditorComponent
}
]
=======
  path: 'post/:id/edit', component: PostEditorComponent
}]

>>>>>>> 11dd73f7a28775edbf12a55db6a66370b5a2fc79

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
<<<<<<< HEAD
    PosteditorComponent
=======
    PostEditorComponent
>>>>>>> 11dd73f7a28775edbf12a55db6a66370b5a2fc79
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
