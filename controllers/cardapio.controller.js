const Cardapio = require('../models/Cardapio') ();
const notification = require('./notifications.controller');
const usuario = require('./usuario.controller');

const controller = {};

controller.get = function(req, res) {

    const id = req.params.id;

    Cardapio.findById(id).exec().then(

        function(cardapio) {
            if(cardapio) {
                res.json(cardapio).end();
            } else {
                res.sendStatus(404).end();
            }
        },

        function(e) {
            console.error(e);
            res.sendStatus(500).end();
        }
    );
}

controller.getAll = function(req, res) {

    Cardapio.find().exec().then(
        function(cardapios) {
            res.json(cardapios);
        },

        function(e) {
            console.error(e);
            res.sendStatus(500).end();
        }
    );
}

controller.post = function(req, res) {

    Cardapio.create(req.body).then(

        function() {
            res.sendStatus(201).end();
        },

        function(e) {
            console.error(e);
            res.sendStatus(500).end();
        }
    );
}

controller.put = function(req, res) {

    const id = req.body._id;

    Cardapio.findOneAndUpdate({_id: id}, req.body).exec().then(

        function(cardapio) {
            if(cardapio){   
                updateMessage(cardapio.data);
                res.sendStatus(204).end();
            } else {
                res.sendStatus(404).end();
            }
        },

        function(e) {
            console.error(e);
            res.sendStatus(500).end();
        }
    );
}

controller.delete = function(req, res) {

    const id = req.params.id;

    Cardapio.findOneAndDelete({_id: id}).exec().then(
        function(cardapio) {
            if(cardapio) {
                res.sendStatus(204).end();
            } else {
                res.sendStatus(404).end();
            }
        },

        function(e) {
            console.error(e);
            res.sendStatus(500).end();
        }
    );
}

function updateMessage(dia){
    dia = new Date(dia).getDay();
    const semana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado'];
    usuario.getAll().exec().then(
        res => notification.new('Cardapio de '+semana[dia]+' atualizado', res)
    ).catch(e => console.error(e));
}





module.exports = controller;