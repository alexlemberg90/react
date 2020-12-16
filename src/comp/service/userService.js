export class UserService {
    userUrl = 'https://jsonplaceholder.typicode.com/users/'

    async getUsers (id) {
        return await fetch(this.userUrl +id)
            .then(value => value.json())

    }
}