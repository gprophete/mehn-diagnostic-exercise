const mongoose = require('../db/connection.js')

const Schema = mongoose.Schema

const issueSchema = new Schema ({
    description: String,
    createdAt: Date,
    status: String,
    priority: String
})

const issueCollection = mongoose.model(`issue`, issueSchema)


//Get all issues
function getAllIssues() {
    return issueCollection.find()
}

//Get one issue
function getOneIssue(id) {
    return issueCollection.findById(id)
}

//Create issue
function createIssue(newIssue) {
    return issueCollection.create(newIssue)
}

//Update issue
function updateIssue(id, updatedIssue) {
    return issueCollection.findByIdAndUpdate(id, updatedIssue)
}

//Delete issue
function deleteIssue(id) {
    return issueCollection.findByIdAndDelete(id)
}

module.exports = {
    getAllIssues,
    getOneIssue,
    createIssue,
    updateIssue,
    deleteIssue,
}