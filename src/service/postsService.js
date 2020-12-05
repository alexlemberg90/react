export class PostsService {
postsUrl = 'https://jsonplaceholder.typicode.com/posts';

getPosts (){
   return  fetch(this.postsUrl)
        .then(value => value.json())
        .then(postsAPI => postsAPI);
}
}
