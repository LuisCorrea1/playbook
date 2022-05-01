class N_User{
    constructor(name, userName, location){
        this.name = name
        this.userName = userName
        this.location = location
        this.birthDate = "98/05/15"
        this.accountCreatedSince = 2014
        this.followers = 78
        this.followinf = 452
    }

    get getUserNameAndFollowers(){
        return `Username ${this.userName} has ${this.followers} followers`
    }

    get getGeneralInfo(){
        return `User ${this.name} from ${this.location} create the account in ${this.accountCreatedSince}`
    }
}

const NewUser = new N_User("#51", "@89Lacv", "México")
console.log(NewUser.getGeneralInfo)
console.log(NewUser.getUserNameAndFollowers)