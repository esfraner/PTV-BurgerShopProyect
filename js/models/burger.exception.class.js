function BurgerException(message){
        this.name = 'BurgerException';
        this.message = 'BurgerException' + (message || 'Undefined Error');
        this.stack = (new Error()).stack;
}

BurgerException.prototype = Object.create(Error.prototype); //Object.assign()
BurgerException.prototype.constructor = BurgerException; 