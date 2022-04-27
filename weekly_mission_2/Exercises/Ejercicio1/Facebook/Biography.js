const Biography = {
    user: "Luis Correa",
    email: "luis.corres@gmail.com",
    phone: "722-123-4567",
    gender: "Male",
    worksAt: "LaunchX",
    livesIn: "Toluca de Lerdo",
    from: "Toluca, México",
    status: "Single",

    getUserInfo: function(){
        return `User ${this.user}, email: ${this.email}, phone: ${this.phone}`
    },

    getExtraInfo: function(){
        return `Status: ${this.status}
                Lives in ${this.livesIn}
                Work at ${this.worksAt}`
    }
}

console.log(Biography.getExtraInfo())
console.log(Biography.getUserInfo())