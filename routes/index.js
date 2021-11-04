

const express = require('express')
const router = express.Router()



router.get('/', (reqw,res) =>{
    res.render('index')
})

module.exports = router