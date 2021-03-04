
const events = require('events');
const eventEmitter = new events.EventEmitter();

const myEventHandler = function (){

        console.log('This is my first custom event and My event name is sarfu');
}

eventEmitter.on('sarfu', myEventHandler);

eventEmitter.emit('sarfu');