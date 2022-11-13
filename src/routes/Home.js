const axios = require('axios');
const { Router }  = require('express');

const router = Router();

router.get('/dashboard', (req, res) => {
  res.render('dashboard'); 
});

router.use((req,res, next) => {
  next();
})

router.get('/about', (req, res) => {
  const users = [
    {
      name: "Ricardo",
      lastname: "Pabon",
      id: 1,
    },
    {
      name: "Meriyein",
      lastname: "García",
      id: 2,
    }
  ]
  res.render('index', {title: "Mi primera pagina con Ejs.", users});
})

router.get('/', (req, res) => {
  const is_active = true;
  res.render('home', {is_active: is_active})
})

router.get('/posts', async (req, res) => {
  try
  {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    res.render('posts', {
      post: response.data,
    });
  }
  catch(error)
  {
    console.log(error);
  };
})

module.exports = router;