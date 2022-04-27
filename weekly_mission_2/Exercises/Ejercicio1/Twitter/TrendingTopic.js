const trendingTopic = {
    number: 1,
    title: "Nets",
    gender: "NBA",
    numberOfTweets: "196 thousand",

    getNumberAndTitle: function(){
        return `Trending Topic #${this.number} - ${this.title}`
    },

    getGender: function(){
        return `Trending topic in ${this.gender}`
    }

}

console.log(trendingTopic.getNumberAndTitle())
console.log(trendingTopic.getGender())