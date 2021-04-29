const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        status: "ok",
        message: "O servidor está funcionando perfeitamente"
    })
});

module.exports = router;