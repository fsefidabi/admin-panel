const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const userModel = require('./loginModel')
const config = require('./config')

const app = new express()
mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => console.log('Database connection is successful.'))

app.use(express.static(__dirname + '/../dist'))
app.use(express.json())

app.post('/login', (req, res) => {
  console.log(req.body)
  console.log('posted')
  const user = new userModel({email: req.body.email, password: req.body.password})
  user.save(async (err) => {
    if (err) return res.status(500).send('There was a problem registering the user.')
    userModel.findOne({email: req.body.email}).exec()
      .then(authenticatedUser => {
        let token = jwt.sign({email: authenticatedUser.email}, config.secret, {expiresIn: 86400})
        console.log(token)
        res.status(200).send({auth: true, token: token, user: authenticatedUser})
      })
      .catch((err) => res.status(500).send('There was a problem getting user'))
  })
})

app.post('/register', (req) => {
  console.log(req.body)
  console.log('posted')
  const user = new userModel({email: req.body.email, password: req.body.password})
  user.save((err, res) => {
    if (err) console.log('mongodb error ', err)
    console.log(res)
    console.log(user)
  })
})

app.listen(8080, () => console.log('connected to express server'))