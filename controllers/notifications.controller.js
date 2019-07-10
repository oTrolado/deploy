const Notification = require('../models/Notification')();
const io = require('socket.io')(3001);
var sock;
var users = {}

io.on('connection', socket => {
    socket.emit('teste', 'Conectado');

    socket.on('login', (data) => {
        users[data] = socket;
        socket.emit('notification', 'autenticado');
    });

    socket.on('disconnect', data => {
        if (!data) return;
        delete users[data];
    });
});


const notification = {

    new: (message, usersM) => {

        connectedUsers = Object.keys(users);

        usersM.forEach(userM => {
            send = connectedUsers.some(conneted => conneted === userM.user);

            if (send)
                users[userM.user].emit('notification', message);
        });

        usersM.map(user => {
            Notification.create({ user: user, message: message, state: 'created', date: new Date() })
                .then(
                    success => { },
                    error => console.error(error)
                );
        });
    },

    get: (req, res) => {
        id = req.params.id;
        Notification.find({ user: id })
            .exec()
            .then(
                notifications => {
                    res.json(notifications);
                },
                error => {
                    res.send(error);
                }
            );
    },

    read: (req, res) => {
        let response = {};
        const ids = req.body.ids;
        ids.forEach(id => {
            Notification.findOneAndUpdate({ _id: id }, { state: 'read' })
                .exec()
                .then(
                    null,
                    error => response += error
                );
            res.send(response).end();
        });
    },

    delete: (req, res) => {
        let response = {};
        const id = req.params.id;
        Notification.findOneAndRemove({ _id: id })
            .exec()
            .then(
                success => res.sendStatus(200).end(),
                error => response += error
            );
        res.send(response).end();
    },

    clearAll: () => {
        Notification.remove().exec()
            .then(
                succes => console.log('apagamos as notificações'),
                error => console.error(error)
            );
    }

}

module.exports = notification;