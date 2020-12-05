export class Service {
postsUrl = 'https://jsonplaceholder.typicode.com/posts';
cmtUrl ='https://jsonplaceholder.typicode.com/comments';

getPosts (){
   return  fetch(this.postsUrl)
        .then(value => value.json())
        .then(postsAPI => postsAPI);
}

getCmt (){
  return   fetch(this.cmtUrl)
        .then(value => value.json())
        .then(commentsAPI => commentsAPI);
}
}
