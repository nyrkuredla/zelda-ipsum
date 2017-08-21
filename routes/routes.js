const express = require('express');
const router = express.Router();
const dal = require('../dal');

router
  .route('/')
  .get(function (req, res) {
    res.render('ipsum')
  })

  .post(function(req, res) {
    const totalText = dal.countParagraphs(req.body.number);
    res.render('ipsum', {text: totalText})
  })

module.exports = router
