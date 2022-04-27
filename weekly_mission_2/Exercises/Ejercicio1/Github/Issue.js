const Issue = {
    title: "Ejercicio2",
    repositoryNameAssociated: "LaunchX",
    status: "Open",
    numberOfComments: 12,
    labels: "['Error', 'Unknown']",
    author: "LuisCorrea1",
    dateCreated: Date(),
    lastUpdated: Date(),

    getTitleAndAuthor: function(){
        return `Issue: ${this.title} created by ${this.author}`
    },

    getGeneralInfo: function(){
        return `Issue created on ${this.dateCreated} with ${this.numberOfComments} comments`
    }
}

console.log(Issue.getGeneralInfo())
console.log(Issue.getTitleAndAuthor())