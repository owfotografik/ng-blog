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
<<<<<<< HEAD
        //debugger
=======
>>>>>>> 11dd73f7a28775edbf12a55db6a66370b5a2fc79
        var id = this.route.snapshot.paramMap.get('id')
        this.post = getPostByPostId(id);
    }
   
}
