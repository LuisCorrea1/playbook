class C_User{
    constructor(name,email){
        this.name = name
        this.email = email
        this.phone = "722-123-4567"
        this.numOfFriends = 1134
        this.pictures = 206
    }

    get getNameAndPhone(){
        return `Name: ${this.name}, Phone Number: ${this.phone}`
    }

    get getInfo(){
        return `User ${this.email} has ${this.numOfFriends} friends and ${this.pictures} pictures` 
    }
}

const NUser = new C_User("Luis Correa", "luis.correa@gmail.com")
console.log(NUser.getInfo)
console.log(NUser.getNameAndPhone)