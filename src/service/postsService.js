import React from 'react';

export const Context = React.createContext();

export class PostsService {
   postsUrl = 'https://jsonplaceholder.typicode.com/posts';
   postUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';

   async getPosts (){
      return await fetch(this.postsUrl)
           .then(value => value.json())

   }
   async getPost (userId){
      return await fetch(this.postUrl+userId)
          .then(value => value.json())

   }


}
