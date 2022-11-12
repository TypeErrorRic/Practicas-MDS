const { Router } = require("express");

const router = Router();

router.get('/user', (req,res) => {
    res.render('user');
})
router.get('/user/:username', function (req, res) {
    res.send(`Hello ${req.params.username.toUpperCase()}`)
});

router.get('/user/:username/photo', (req, res) => {
    if (req.params.username === "ricardo") {
        return res.sendFile("./uploads/Cat_November_2010-1a.jpg.webp", {
            root: require.main.path
        });
    }
    res.send(`Usuario: ${req.params.username.toUpperCase()} no tiene acceso.`)
});

router.post('/user', (req, res) => {
    console.log(req.body)
    res.send('Hello World.')
});

module.exports = router;