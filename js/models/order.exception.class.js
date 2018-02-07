function OrderException(message){
    this.name = 'OrderException';
    this.message = 'OrderException' + (message || 'Undefined Error');
    this.stack = (new Error()).stack;
}

OrderException.prototype = Object.create(Error.prototype); 
OrderException.prototype.constructor = OrderException; 