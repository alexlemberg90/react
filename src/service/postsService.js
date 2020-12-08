export class PostsService {
   postsUrl = 'https://jsonplaceholder.typicode.com/posts';

   async getPosts (){
      return await fetch(this.postsUrl)
           .then(value => value.json())

   }

}
