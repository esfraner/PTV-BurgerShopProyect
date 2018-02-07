describe("Order Class", () => {
    xdescribe("#constructor", () => {
        it("should init an empty array of burgers", () => {});
    });

    describe("#addBurger", () => {
        it("should add a burger to the order", () => {
            const order = new Order();
            const burger1 = new Burger();

            const ArrayLong = order.arrayOrderLong();
            order.addBurger(burger1);


            expect(order.arrayOrderLong()).toBe(ArrayLong + 1);
        });

        it("should throw an exception when the burger exist", () => {
            const order = new Order();
            const burger1 = new Burger();
            const burger2 = new Burger();

            burger2.id = burger1.id;

            order.addBurger(burger1);

            expect(
                function(){
                    order.addBurger(burger2);                    
                }
            ).toThrowError("Burger exists");


 /*            order.addBurger(burger2);

            expect(order.addBurger(burger2)).toThrowError("Burger exists"); */
        });

    });
    describe("#deleteBurger", () => {
        it("should remove a burger to the order", () => {
            const order = new Order();
            const burger1 = new Burger();

            order.addBurger(burger1);

            const ArrayLong = order.arrayOrderLong();

            order.deleteBurger(burger1);

            expect(order.arrayOrderLong()).toBe(ArrayLong - 1);

        });
        it("should throw an exception when the burger doesn't exist", () => {
            const order = new Order();
            const burger2 = new Burger();

            expect(
                function(){
                    order.deleteBurger(burger2);
                }
            ).toThrowError("Burger doesn't exist");

/* 

            order.deleteBurger(burger2);

            expect(order.deleteBurger(burger2)).toThrowError("Burger doesn't exist"); */

        });

    });
});