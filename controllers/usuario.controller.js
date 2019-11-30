const md5 = require('md5');
const Usuario = require('../models/Usuario')();
const emailService = require('../services/email.service');
const jwt = require('jsonwebtoken');
const promisify = require('util');

const controller = {};

controller.logar = function (req, res) {

    const user = req.params.user;
    const senha = md5(req.body.senha + global.SALT_KEY);

    Usuario.findOne({ user: user }).exec().then(

        function (usuario) {
            if (usuario.senha == senha) {
                const { admin, email, nome, user, _id } = usuario;

                res.json({
                    user: {
                        admin,
                        email,
                        nome,
                        user
                    },
                    token: jwt.sign({ id: _id }, global.SALT_KEY, {
                        expiresIn: '7d'
                    })
                }).end();
            } else {
                res.sendStatus(404).end();
            }
        },

        function (e) {
            console.error(e);
            res.sendStatus(500).end();
        }
    );
}

controller.get = async function (req, res) {
    const token = req.headers.authorization;

    const decode = await promisify(jwt.verify)(token, global.SALT_KEY);

    Usuario.findById(decode.id).exec().then(

        function (usuario) {
            if (usuario) {
                const { admin, email, nome, user } = usuario;
                res.json({
                    user: {
                        admin,
                        email,
                        nome,
                        user
                    }
                }).end();
            } else {
                res.sendStatus(404).end();
            }
        },

        function (e) {
            console.error(e);
            res.sendStatus(500).end();
        }
    );
}

controller.post = function (req, res) {

    Usuario.create({
        nome: req.body.nome,
        user: req.body.user,
        email: req.body.email,
        senha: md5(req.body.senha + global.SALT_KEY)
    }).then(
        function () {
            emailService.send(req.body.email, 'Bem vindo ao Cardapio da SMN', global.EMAIL_TMPL.replace('{0}', req.body.nome));
            res.sendStatus(201).end();
        },

        function (e) {
            console.error(e);
            res.sendStatus(500).end();
        }
    );
}

controller.put = function (req, res) {

    const id = req.body._id;

    Usuario.findOneAndUpdate({ _id: id }, req.body).exec().then(

        function (usuario) {
            if (usuario) {
                res.sendStatus(204).end();
            } else {
                res.sendStatus(404).end();
            }
        },

        function (e) {
            console.error(e);
            res.sendStatus(500).end();
        }
    );
}

controller.delete = function (req, res) {

    const id = req.params.id;

    Usuario.findOneAndDelete({ _id: id }).exec().then(
        function (usuario) {
            if (usuario) {
                res.sendStatus(204).end();
            } else {
                res.sendStatus(404).end();
            }
        },

        function (e) {
            console.error(e);
            res.sendStatus(500).end();
        }
    );
}

controller.getAll = () => {
    return Usuario.find()
}

module.exports = controller;