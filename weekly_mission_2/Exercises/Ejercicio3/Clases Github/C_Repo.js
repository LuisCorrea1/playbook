class Repo{
    constructor(name, author, language){
        this.name = name
        this.author = author
        this.language = language
        this.NumberOfCommits = 10
        this.stars = 100
        this.forks = 400
        this.issuesOpen = 2
        this.issuaesClosed = 5
    }

    get getTotalIssues(){
        return this.issuesOpen + this.issuaesClosed
    }

    get getGeneralInfo(){
        return `This repository ${this.name} was created by ${this.author}` 
    }
}

const Repo1 = new Repo("Playbook", "LuisCorrea1", "JavaScript")
console.log(Repo1.getGeneralInfo)
console.log(Repo1.getTotalIssues)