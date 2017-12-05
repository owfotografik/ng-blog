import { Component } from '@angular/core';
import { getPostByPostId } from '../../services/blog.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'post',
    templateUrl: './post.component.html'
})

export class PostComponent {
    post: {}
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {
        debugger
        var id = this.route.snapshot.paramMap.get('id')
        this.post = getPostByPostId(id);
    }
}
