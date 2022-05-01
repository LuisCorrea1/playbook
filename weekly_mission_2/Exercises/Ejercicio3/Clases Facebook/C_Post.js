class C_Post{
    constructor(username,usePicture){
        this.username = username
        this.usePicture = usePicture
        this.likes = 140
        this.comments = 15
        this.shares = 3
    }

    get getInfo(){
        return `Post has ${this.likes} and ${this.comments} comments`
    }

    get getUser(){
        return `New post from: ${this.username}`
    }
}

const NewPost = new C_Post("Domestika", true)
console.log(NewPost.getInfo)
console.log(NewPost.getUser)