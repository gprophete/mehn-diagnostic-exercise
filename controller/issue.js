const express = require(`express`)
const issueModel = require(`../models/issue.js`)
const issueRouter = express.Router()

//Get all issues
issueRouter.get('/', (req, res) => {
    issueModel.getAllIssues()
        .then((issues) =>{
            res.render(`issues/issues`, {issues})
        })
        .catch((error) => {
            console.log(error)
            res.json('Failed')
            
        })
})
//New issue form
issueRouter.get('/new', (req, res) =>{
    res.render('issues/createIssue')
})

//Create issue
issueRouter.post('/', (req, res) => {
    issueModel.createIssue(req.body) 
        .then(() => {
            res.json()
        })
        .catch((error) => {
            console.log(error)
            res.json('Failed')
            
        })
})

//Get one issue
issueRouter.get('/:id', (req, res) => {
    issueModel.getOneIssue(req.params.id)
        .then((oneIssue) => {
            res.json(oneIssue)
        })
        .catch((error) => {
            console.log(error)
            res.json('Failed')
            
        })
})

//Update issue
issueRouter.put('/:id', (req, res) => {
    issueModel.updateIssue(req.params.id, req.body)
        .then(() => {
            res.json('updated')
        })
        .catch((error) => {
            console.log(error)
            res.json('Failed')
            
        })
})

//Delete issue
issueRouter.delete('/:id', (req, res) => {
    issueModel.deleteIssue(req.params.id)
        .then(() =>{
            res.json('Deleted')
        })
        .catch((error) => {
            console.log(error)
            res.json('Failed')
            
        })
})



module.exports = issueRouter