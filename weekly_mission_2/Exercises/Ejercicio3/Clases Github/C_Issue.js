class Issue {
    constructor(title, author, status){
        this.title = title
        this.author = author
        this.status = status
        this.repositoryNameAssociated = "Node JS"
        this.numbeOfComments = 22
        this.labels = "Introducción"
        this.dateCreated = Date()
        this.lastUpdates = Date()
    }

    get getTitleAndAuthor(){
        return `Issue: ${this.title} by ${this.author}`
    }

    get getGeneralInfo(){
        return `${this.repositoryNameAssociated} with ${this.numbeOfComments} comments created in ${this.dateCreated}`
    }
}

const Issue1 = new Issue("Clases y Objetos", "LuisCorrea1", "OnGoing")
console.log(Issue1.getTitleAndAuthor)
console.log(Issue1.getGeneralInfo)

