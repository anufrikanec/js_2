class Burger{
    constructor() {
        this.burgerSize = '';
        this.burgerFiller = '';
        this.burgerSupplements = [];
        this.prise = 0;
        this.callories = 0;
    }

    render(finalSize, filler, supplements, price, calories) {
        if (this.burgerSize) {
            document.querySelector(finalSize).textContent = this.burgerSize;
        }
        if (this.burgerFiller) {
            document.querySelector(filler).textContent = this.burgerFiller;
        }
        if (this.burgerSupplements.length > 0) {
            document.querySelector(supplements).textContent = this.burgerSupplements.join(', ');
        }
        document.querySelector(price).textContent = this.prise;
        document.querySelector(calories).textContent = this.callories;
    }
}

class BurgerEditor{
    constructor(finalSize, filler, supplements, price, calories) {
        this.burger = new Burger();
        this.finalSize = finalSize;
        this.filler = filler;
        this.supplements = supplements;
        this.price = price;
        this.calories = calories;
    }
    
}