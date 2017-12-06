class Author {
    name: string;
    email: string;
    imgUrl: string;
}

class Post {
    id: string;
    title: string;
    body: string;
    author: Author;
    constructor() {
        this.id = posts.length.toString()
    }
}

let posts: [Post] = getPostsFromStorage()

function getPostsFromStorage() {
    return JSON.parse(localStorage.getItem('posts')) || []
}


function getPosts() {
    return posts
}

function savePosts() {
    localStorage.setItem('posts', JSON.stringify(posts));
}

function getPostByPostId(postId: string): Post {

    for (var i = 0; i < posts.length; i++) {
        var post = posts[i]
        if (post.id == postId) {
            return post
        }
    }

    return new Post()
}

function updatePost(post) {
    var p = posts.find(x => x.id == post.id)
    if (p) {
        p.body = post.body
        p.title = post.title
    } else {
        post.author = { name: 'Jake', email: 'j@j.com', imgUrl: '//placehold.it/80x80' }
        posts.push(post)
    }
    savePosts()
}


export {
    getPosts,
    getPostByPostId,
    updatePost
}