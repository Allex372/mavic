export class CommentsSercice{

    url = 'https://jsonplaceholder.typicode.com/comments'

    async getAllComments(){
        return await fetch(this.url)
            .then(value => value.json())
            .then(value => {
                return value
            })
    }
}