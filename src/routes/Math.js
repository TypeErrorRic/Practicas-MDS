const { Router } = require('express');

const router = Router();

router.get('/add/:x/:y', (req, res) => {
    const { x, y } = req.params
    res.send(`Result = ${parseInt(x) + parseInt(y)}`)
});

module.exports = router;