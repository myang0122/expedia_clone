const express = require('express');
const User = require('../models/userSchema');
const Flight = require('../models/flight');
const router = express.Router();
const bcrypt = require('bcrypt');
// const { body, validationResult } = require('express-validator');

// router.get('/', async function(req, res, next) {
//   const products = await Product.find();
//   res.render('index', {user: req.session.user, page: 'home', products: products});
// });
// body('email').isEmail(),
router.post('/register', async function(req, res, next) {
  console.log('1')
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  console.log(username)

  // const emailErrors = validationResult(req);
  // if (!emailErrors.isEmpty()) {
  //   return res.status(400).json({ errors: emailErrors.array() });
  // }

  const user1 = await User.findOne({email: email});
  const user2 = await User.findOne({username: username});
  if (user1 == null && user2 == null) {
    const newUser = new User({
      username: username, 
      email: email, 
      password: password,
    });
    console.log(newUser)
    await newUser.save();
  }
  
  res.end()
  // res.redirect('/login');
});

// // router.get('/register', function(req, res, next) {
// //   res.render('register', {user: req.session.user, page: 'signup'});
// // });

// // router.get('/login', function(req, res, next) {
// //   res.render('login', {user: req.session.user, page: 'login'});
// // });

router.post('/login', async function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username, password)

  const user = await User.findOne({username: username});

  if (user) {
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      req.session.user = user;
      console.log("here");
    } else {
      console.log("not match");
    }
  };
  res.redirect('/');
});

// // router.get('/logout', function(req, res, next) {
// //   req.session.user = null;
// //   res.redirect('/');
// // });

module.exports = router;
