class Bio{
    constructor(user, gender,livesIn){
        this.user = user
        this.email = "luis.correa@gmail.com"
        this.phone = "722-123-4567"
        this.gender = gender
        this.worksAt = "LaunchX"
        this.livesIn = livesIn
        this.from = "México"
        this.status = "single" 
    }

    get getUserInfo(){
        return `User ${this.user}, email: ${this.email}, phone: ${this.phone}` 
    }

    get getExtraInfo(){
        return `Status: ${this.status}, Lives in ${this.livesIn}, Work at ${this.worksAt}`
    }
}

const biograpghy = new Bio("Luis Correa", "Male", "Toluca de Lerdo")
console.log(biograpghy.getExtraInfo)
console.log(biograpghy.getUserInfo)