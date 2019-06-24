const Notification = require('../models/Notification') ();
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
        if(!data) return;
        delete users[data];
    });
});


const notification = {

    new: (message, usersM) => {

        connectedUsers = Object.keys(users);
        
        usersM.forEach(userM => {
            send = connectedUsers.some( conneted => conneted === userM.user);
            console.log(send)
            if(send)
                users[userM.user].emit('notification', message);
        });

        // usersM.map( user => {
        //     Notification.create({user: user, message: message, state: 'created', date: new Date()})
        //     .then(
        //         success => {},
        //         error => console.error(error)
        //     );
        // });
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