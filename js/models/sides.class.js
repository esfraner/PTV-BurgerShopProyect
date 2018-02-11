function Sides({
    units = 0,
    name,
    imageSrc,
    netPrice,
    tax,
    kcal,
    stock,
}) {

    this.units = units;
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
Sides.prototype = Object.create(Item.prototype);
Sides.prototype.constructor = Sides.constructor;

//GETTER
Sides.prototype.getUnits = function (units) {
    this.price = units;
}

//SETTER
Sides.prototype.setUnits = function (_units) {
    this.units = _units;
}

//TOSTRING
Sides.prototype.toString = function () {
    return `${Item.prototype.toString.call(this)}, price: ${this.price}`;
}