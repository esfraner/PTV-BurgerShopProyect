function SideException(message){
    this.name = 'SideException';
    this.message = 'SideException' + (message || 'Undefined Error');
    this.stack = (new Error()).stack;
}

SideException.prototype = Object.create(Error.prototype); 
SideException.prototype.constructor = SideException; 