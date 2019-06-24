const Notification = require('../models/Notification') ();

const notification = {

    new: (message, users) => {
        users.map( user => {
            Notification.create({user: user, message: message, state: 'created', date: new Date()})
            .then(
                success => {},
                error => console.error(error)
            );
        });
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