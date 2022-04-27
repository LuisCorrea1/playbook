const Profile = {
    user: "Luis Correa",
    typeOpPayment: "cash",
    numberOfTrips: 34,
    stars: 4.83,
    
    getuserAndStars: function(){
        return `User ${this.user} has ${this.stars} stars`
    },

    getUserInfo: function(){
        return `User has made ${this.numberOfTrips} trips. Payment preferences: ${this.typeOpPayment}`
    }
}

console.log(Profile.getUserInfo())
console.log(Profile.getuserAndStars())