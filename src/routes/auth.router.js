"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- *
{
    "username": "testF0",
    "password": "1234"
}
/* ------------------------------------------------------- */

const auth = require('../controllers/auth.controller')

// URL: /auth

// Login/logout:
router.post('/login', auth.login)
// router.all('/logout', auth.logout) // swagger .all metodunu görmez
router.get('/logout', auth.logout)

/* ------------------------------------------------------- */
module.exports = router