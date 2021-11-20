const EventEmitter=require('events').EventEmitter

let count=0;
class Logger extends EventEmitter{

    logs(message) {
        this.emit('message',{id:count++,message:message});
    }
}

module.exports = Logger