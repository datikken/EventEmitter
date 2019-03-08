const { EventEmitter } = require('events');

class Kettle extends EventEmitter {
    start(){
        setTimeout(() => {
            this.emit('ready', {
                
            });
        })
    }
}

const k = new Kettle();

k.start();

k.on('ready', () => {
    console.log('Чайник вскипел!');
})