export class PostsService {
   postsUrl = 'https://jsonplaceholder.typicode.com/posts';

   async getPosts (){
      return await fetch(this.postsUrl)
           .then(value => value.json())

   }
   async getPost (id){
      return await fetch(this.postsUrl + `/${id}`)
          .then(value => value.json())

   }

}
