class Author {
    name: string;
    email: string;
    imgUrl: string;
}

class Post {
    id: string;
    title: string;
    body: string;
    author: Author
}

let posts: [Post] = [{
    id: "910u32jfdasdfk9032089j09fdsa",
    title: 'Getting started with NG',
    body: 'NG IS HARD!',
    author: { name: 'Jake Overall', email: 'j@j.com', imgUrl: '//placehold.it/80x80' }
}, {
    id: "910u32jfdasdfk9032089j09fdsa",
    title: 'Next Stesp with NG',
    body: 'NG IS VERY HARD!',
    author: { name: 'Jake Overall', email: 'j@j.com', imgUrl: '//placehold.it/80x80' }
}]

function getPosts() {
    return posts
}

function getPostByPostId(postId: string): Post {

    for(var i = 0; i < posts.length; i++){
        var post = posts[i]
        if(post.id == postId){
            return post
        }
    }
}


export { 
    getPosts,
    getPostByPostId
 }