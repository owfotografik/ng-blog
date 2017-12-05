import { Component } from '@angular/core';
import { getPosts } from '../../services/blog.service'

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})

export class HomeComponent {
  posts = getPosts()
}
