const { Router }  = require('express');

const router = Router();

router.get('/dashboard', (req, res) => {
  res.render('dashboard'); 
});

router.get('about', (req, res) => {
  res.render('index', {title: "Mi primera pagina con Ejs."});
})

router.get('/', (req, res) => {
  const is_active = true;
  res.render('home', {is_active: is_active})
})

module.exports = router;