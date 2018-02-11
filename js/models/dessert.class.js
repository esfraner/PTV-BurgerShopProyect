function Dessert({
    isDiabetic = false,
    name,
    imageSrc,
    netPrice,
    tax,
    kcal,
    stock,
}) {
    this.isDiabetic = isDiabetic;
    
    Item.call(this, {
        name: name,
        imageSrc: imageSrc,
        netPrice: netPrice,
        tax: tax,
        kcal: kcal,
        stock: stock
    });
}

//ITEM
Dessert.prototype = Object.create(Item.prototype);
Dessert.prototype.constructor = Dessert.constructor;

Dessert.prototype.getIsDiabetic = function (isDiabetic) {
    this.isDiabetic = isDiabetic;
}

Dessert.prototype.setDiabetic = function (_isdiabetic) {
    this.isDiabetic = _isdiabetic;
}
Dessert.prototype.toString=function(){
    return `${Item.prototype.toString.call(this)}, price: ${this.price}`;
}