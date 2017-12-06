import { Component } from '@angular/core';
import { getPostByPostId } from '../../services/blog.service'
import { updatePost } from '../../services/blog.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'posteditor',
    templateUrl: './posteditor.component.html'
})

export class PosteditorComponent {
    post: {}
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {
        //debugger
        var id = this.route.snapshot.paramMap.get('id')
        this.post = getPostByPostId(id);
    }
    save() {
        updatePost(this.post);
    }
}