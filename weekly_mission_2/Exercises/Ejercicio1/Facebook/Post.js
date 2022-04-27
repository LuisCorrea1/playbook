const Post = {
    username: "Domestika",
    usePicture: true,
    likes: 140,
    comments: 15,
    shares: 3,

    getInfo: function(){
        return `Post has ${this.likes} and ${this.comments} comments`
    },

    getUser: function(){
        return `New post from: ${this.username}` 
    }
}

console.log(Post.getInfo())
console.log(Post.getUser())