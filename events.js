const { EventEmitter } = require('events');

class Kettle extends EventEmitter {
    constructor(){
        super();

        setTimeout(() => {
            this.emit('created', {})
        }, 0);
    }
    start(){
        setTimeout(() => {
            this.emit('started', {}, 0);
        }),
        setTimeout(() => {
            this.emit('ready', {}, 3000);
        })
    }
}

const k = new Kettle();

k.start();

k.on('created', () => {
    console.log('Чайник поставлен.');
});

k.on('started', () => {
    console.log('Чайник закипел!');
});

k.on('ready', () => {
    console.log('Чайник сгорел!!!');
});