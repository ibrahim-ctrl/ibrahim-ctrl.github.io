const express = require('express')
const { get } = require('http')

const app = express()
const port = 3000

app.get('/ibrahim-ctrl', (req, res)=>{
    res.redirect('https://ibrahim-ctrl.github.io/')
})