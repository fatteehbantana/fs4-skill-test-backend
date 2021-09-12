require('dotenv').config()

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

app.use(express.json())

app.get('/users', (req, res) => {
    res.json()
})

app.post('/register', (req, res) => {
    res.json(
        {
        name: "",
        address: "",
        phone: "",
        gender: "",
        email: "",
        password: ""
        }
    )
})

app.post('/login', (req, res) => {
    res.json(
        {
            email: "",
            password: ""
        }
    )
})

//Port
app.listen(3001)