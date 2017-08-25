const express = require('express');
const router = express.Router();
const dal = require('../dal');

router
  .route('/')
  .get(function (req, res) {
    res.render('ipsum')
  })

//rendering paragraphs on main page
  .post(function(req, res) {
    const totalText = dal.countParagraphs(req.body.number);
    res.render('ipsum', {text: totalText})
  })

router
  .route('/navi')
  .get(function (req, res) {
    res.render('naviIpsum')
  })

  .post(function(req, res) {
    const totalText = dal.countNaviParagraphs(req.body.number);
    res.render('naviIpsum', {text: totalText})
  })

module.exports = router
