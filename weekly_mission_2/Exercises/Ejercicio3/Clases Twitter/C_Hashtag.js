class N_Hashtag{
    constructor(name, username){
        this.name = name
        this.username = username
        this.content = "Double podium since 2016!!"
        this.likes = "11.8k"
        this.comments = 206
        this.retweets = 1129
    }

    get getNameAndContent(){
        return `${this.name} announce ${this.content}`
    }

    get getNumbers(){
        return `Tweet has ${this.likes} likes, ${this.comments} comments and ${this.retweets} retweets`
    }
}

const NewHash = new N_Hashtag("Oracle Redbull Racing", "@redbullracing")
console.log(NewHash.getNameAndContent)
console.log(NewHash.getNumbers)