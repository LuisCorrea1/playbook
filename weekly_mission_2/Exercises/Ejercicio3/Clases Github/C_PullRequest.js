class PullRequest {
    constructor(title, branchName){
        this.title = title
        this.branchName = branchName
        this.dateCreated = Date()
        this.status = "Completed"
        this.repositoryNameAssociated = "Playbook"
    }
    
    get getStatus(){
        return this.status
    }

    get getTitleAndBranch(){
        return `Pull Request: ${this.title} applied at ${this.branchName}`
    }
}

const NewPull = new PullRequest("New Feature", "Main")
console.log(NewPull.getStatus)
console.log(NewPull.getTitleAndBranch)