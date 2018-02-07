let ID=0;
function Item({ name="Sola" } = {}){
    this.id = ID++;
    this.name = name;
}

Item.prototype.toString = function(){
    return `Item: ${this.name}`;
}