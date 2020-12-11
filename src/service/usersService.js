export class UsersService {
    userUrl = 'https://jsonplaceholder.typicode.com/users'

    async getUsers () {
        return await fetch(this.userUrl)
            .then(value => value.json())

    }
}