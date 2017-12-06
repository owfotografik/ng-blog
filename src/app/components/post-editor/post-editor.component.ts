import { Component } from '@angular/core'
import { getPostByPostId, updatePost } from '../../services/blog.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'post-editor',
    templateUrl: './post-editor.component.html'
})

export class PostEditorComponent {
    post: {}
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {
        var id = this.route.snapshot.paramMap.get('id')
        this.post = getPostByPostId(id);
    }
    save(){
        updatePost(this.post)
    }
}