describe("Burger Class", () => {
    const PRICE_EXTRA_INGREDIENTS = 0.30;

    describe("#constructor", () => {
        it("should init default parameters when no parameters", () => {
            const burger1 = new Burger();
            const burgerPrice = 1;
            const burgerName = "Sola";

            expect(burgerPrice).toBe(burger1.price);
            expect(burgerName).toBe(burger1.name);
        });
        it("should overwrite only one parameter when it is send", () => {

        });
        it("should overwrite all parameters when they are send", () => {
            const burger1 = new Burger({
                name: "test",
                price: 2,
                extraIngredients: ["Lechuga"],
                ingredients: ["Pollo"]
            });
           
            const extraIngredientx = ["Lechuga"];

            expect(burger1.extraIngredients).toEqual(extraIngredientx);


        })
    });
    describe("#equals", () => {
        it("should be true when two burgers have the same ID", () => {
            const burger1 = new Burger();
            const burger2 = new Burger();
            burger2.id = burger1.id;

            expect(burger1.equals(burger2)).toBeTruthy();
        });
        it("should be false when two burgers have not the same ID", () => {
            const burger1 = new Burger();
            const burger2 = new Burger();

            expect(burger1.equals(burger2)).toBeFalsy();
        });
        it("should throw an exception when one burger is compare with a null/undefined burger", () => {
            const burger1 = new Burger();

            expect(function () {
                burger1.equals(undefined);
            }).toThrowError("Burger doesn't exist");
        });
    });

    describe("#addExtraIngredient", () => {
        it("should add an extra ingredient", () => {
            const burger = new Burger();
            const extraIngredient = "Bacon";
            const numIngredients = burger.numExtraIngredients();
            const price = burger.price;

            burger.addExtraIngredient(extraIngredient);

            //expect(burger.isExtraIngredient(extraIngredient)).toBeTruthy();

            expect(burger.price).toBe(price + PRICE_EXTRA_INGREDIENTS);
            expect(burger.numExtraIngredients()).toBe(numIngredients + 1);
        });
    });
    describe("#removeExtraIngredient", () => {
        it("should remove an extra ingredient", () => {
            const extraIngredient = "Bacon";
            const burger = new Burger({
                name: "Nuestra",
                price: 2,
                extraIngredients: [extraIngredient],
                ingredients: []
            });
            const numIngredients = burger.numExtraIngredients();
            const price = burger.price;


            burger.removeExtraIngredient(extraIngredient);

            expect(burger.price).toBe(price - PRICE_EXTRA_INGREDIENTS);
            expect(burger.numExtraIngredients()).toBe(numIngredients - 1);

        });
        it("should throw an exception when the extra ingredient doesn't exist", () => {
            const extraIngredient = "Bacon";
            const extraIngredientToRemove = "Cheese";
            const burger = new Burger({
                name: "Nuestra",
                price: 2,
                extraIngredients: [extraIngredient],
                ingredients: []
            });
            const numIngredients = burger.numExtraIngredients();
            const price = burger.price;

            expect(
                function () {
                    burger.removeExtraIngredient(extraIngredientToRemove);
                }
            ).toThrowError("Ingredient extra doesn't found");


        });
    });
});