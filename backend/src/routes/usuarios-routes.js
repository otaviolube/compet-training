const router = require('express').Router();
const { lerUsuarios, inserirUsuario, atualizarUsuario, deletarUsuario } = require('../controllers/usuarios-controller');

router.get('/:id?', lerUsuarios);

router.post('/', inserirUsuario);

router.patch('/:id', atualizarUsuario);

router.delete('/:id', deletarUsuario);

module.exports = router;