const Hashtag = {
    name: "Oracle Redbull Racing",
    username: "@redbullracing",
    content: "Double podium since 2016!!",
    likes: "11.8k",
    coments: "106",
    retweets: "1129",

    getNameAndConent: function(){
        return `${this.name} announce ${this.content}`
    },

    getNumbers: function(){
        return `Tweet has ${this.likes} likes, ${this.coments} comments and ${this.retweets} retweets`
    }
}

console.log(Hashtag.getNameAndConent())
console.log(Hashtag.getNumbers())