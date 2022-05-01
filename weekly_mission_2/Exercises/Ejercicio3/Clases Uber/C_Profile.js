class C_Profile{
    constructor(user, numberOfTrips){
        this.user = user
        this.numberOfTrips = numberOfTrips
        this.typeOfPayment = "cash"
        this.stars = 4.83
    }

    get getUserAndStars(){
        return `User ${this.user} has ${this.stars} stars`
    }

    get getUserInfo(){
        return `User has made ${this.numberOfTrips} trips. Payment preferences: ${this.typeOfPayment}` 
    }

}

const New_Profile = new C_Profile("Luis Correa", 34)
console.log(New_Profile.getUserAndStars)
console.log(New_Profile.getUserInfo)