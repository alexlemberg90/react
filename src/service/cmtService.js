export class CmtService {
    cmtsUrl ='https://jsonplaceholder.typicode.com/comments';
    cmtUrl = 'https://jsonplaceholder.typicode.com/comments?postId=';

   async getCmts (){
        return  await fetch(this.cmtsUrl)
           .then(value => value.json())
    }
    async getCmt (postId){
        return  await fetch(this.cmtUrl+postId)
            .then(value => value.json())
    }
}