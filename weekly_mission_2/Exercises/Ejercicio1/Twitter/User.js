const User = {
    Name: "#51",
    userName: "@98Lacv",
    Location: "México",
    birthDate: "98/05/15",
    AccountCreatedSince: "2014",
    followers: 78,
    following: 452,

    getUserNameAndFollowers: function(){
        return `The username ${this.userName} has ${this.followers} followers`
    },

    getGeneralInfo: function(){
        return `User ${this.Name} from ${this.Location} create the account in ${this.AccountCreatedSince}`
    }
}

console.log(User.getUserNameAndFollowers())
console.log(User.getGeneralInfo())