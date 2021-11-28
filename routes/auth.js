/*
    path: 'api/login'
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, login, renewToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.post('/new', [
    check('nombre', 'El nombre es obligatorio.').not().isEmpty(),
    check('email', 'El Correo electrónico es obligatorio.').isEmail(),
    check('password', 'El password es obligatorio. debe tener al menos 8 caracteres').not().isEmpty().isLength({ min: 8 }),
    validarCampos
], crearUsuario);

router.post('/', [
    check('email', 'El Correo electrónico es obligatorio.').isEmail(),
    check('password', 'El password es obligatorio. debe tener al menos 8 caracteres').not().isEmpty().isLength({ min: 8 }),
], login);

router.get('/renew', validarJWT, renewToken);



module.exports = router;