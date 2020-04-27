const express = require(`express`)
const issueModel = require(`../models/issue.js`)
const issueRouter = express.Router()

//Get all issues
issueRouter.get('/', (req, res) => {
    issueModel.getAllIssues()
        .then((issues) => {
            res.render(`issue/issues`, { issues })
        })
        .catch((error) => {
            console.log(error)
            res.json('Failed')

        })
})
//New issue form
issueRouter.get('/new', (req, res) => {
    res.render('issue/createIssue')
})

//Get one issue
issueRouter.get('/:id', (req, res) => {
    issueModel.getOneIssue(req.params.id)
        .then((oneIssue) => {
            res.render('issue/oneIssue', { oneIssue })
        })
        .catch((error) => {
            console.log(error)
            res.json('Failed')

        })
})



//New issue form
issueRouter.get('/new', (req, res) => {
    res.render('issue/createIssue')
})

//Update issue
issueRouter.get('/:id/edit', (req, res) => {
    issueModel.getOneIssue(req.params.id)
       .then((oneIssue) => {
           res.render('issue/editIssue', {oneIssue})
       })
       .catch(err => {
           console.log(err)
           res.json(err)
       })
})


//Create issue
issueRouter.post('/', (req, res) => {
    issueModel.createIssue(req.body)
        .then((newIssue) => {
            res.redirect(`/issue/${newIssue._id}`)
        })
        .catch((error) => {
            console.log(error)
            res.json('Failed')

        })
})

//Delete issue
issueRouter.delete('/:id', (req, res) => {
    issueModel.deleteIssue(req.params.id)
        .then(() => {
            res.redirect('/issue')
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
            res.redirect(`/issue/${req.params.id}`)
        })
        .catch((error) => {
            console.log(error)
            res.json('Failed')

        })
})



module.exports = issueRouter