const express = require('express')
const issueRouter = require(`./controller/issue.js`)
const methodOverride = require('method-override')
const app = express()
const port = 3000

app.set('view engine', 'hbs')

app.use(methodOverride('_method'))
app.use(express.urlencoded())
app.use(express.static(__dirname + '/public'))


app.use(express.json())

app.get('/', (req, res) => {
    res.json('ok')
})

app.use('/issue', issueRouter)




app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})