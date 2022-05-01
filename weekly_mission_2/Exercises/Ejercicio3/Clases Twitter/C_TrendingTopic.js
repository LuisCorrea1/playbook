class TrendTopic{
    constructor(number,title){
        this.number = number
        this.title = title
        this.gender = "Sports"
        this.numberOfTweets = 196000
    }

    get getNumberAndTitle(){
        return `Trending Topic #${this.number} - ${this.title}`
    }

    get getGender(){
        return `Trending topic in ${this.gender}`
    }
}

const NewTrend = new TrendTopic(1,"Nets")
console.log(NewTrend.getGender)
console.log(NewTrend.getNumberAndTitle)