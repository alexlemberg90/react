export class CmtService {
    cmtUrl ='https://jsonplaceholder.typicode.com/comments';

   async getCmts (){
        return  await fetch(this.cmtUrl)
           .then(value => value.json())
    }
    async getCmt (id){
        return  await fetch(this.cmtUrl + `/${id}`)
            .then(value => value.json())
    }
}