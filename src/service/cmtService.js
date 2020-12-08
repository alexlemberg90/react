export class CmtService {
    cmtUrl ='https://jsonplaceholder.typicode.com/comments';

   async getCmt (){
        return  await fetch(this.cmtUrl)
           .then(value => value.json())

    }
}