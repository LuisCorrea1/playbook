const User = {
    name: "Luis Correa",
    email: "luis.correa@gmail.com",
    phone: "722-134-3455",
    numOfFriends: 1134,
    pictures: 206,

    getNameAndPhone: function(){
        return `Name: ${this.name}, Phone Number: ${this.phone}`
    },

    getInfo: function(){
        return `User ${this.email} has ${this.numOfFriends} friends and ${this.pictures} pictures`
    }
}

console.log(User.getNameAndPhone())
console.log(User.getInfo())