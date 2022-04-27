const PullRequest = {
    author: "LuisCorrea1",
    title: "New Feature",
    branchName: "Main",
    dateCreated: Date(),
    status: "On Hold",
    repositoryNameAsociated: "LaunchX",

    getStatus: function(){
        return `Pull Request status: ${this.status}`
    },

    getTitleAndAuthor: function(){
        return `Pull Request title: ${this.title}, made by ${this.author}`
    }

}

console.log(PullRequest.getStatus())
console.log(PullRequest.getTitleAndAuthor())