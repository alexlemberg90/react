export class UsersService {
    userUrl = 'https://jsonplaceholder.typicode.com/users'

    async getUsers () {
        return await fetch(this.userUrl)
            .then(value => value.json())

    }
    async getUser (id) {
        return await fetch(this.userUrl + `/${id}`)
            .then(value => value.json())

    }
}