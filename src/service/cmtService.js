export class CmtService {
    cmtUrl ='https://jsonplaceholder.typicode.com/comments';

    getCmt (){
        return   fetch(this.cmtUrl)
            .then(value => value.json())
            .then(commentsAPI => commentsAPI);
    }
}