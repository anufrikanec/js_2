class Burger{
    constructor(finalSize, filler, supplements, price, calories) {
        this.burgerSize = '';
        this.burgerFiller = '';
        this.burgerSupplements = [];
        this.price = 0;
        this.callories = 0;
        this.finalSizeElem = finalSize;
        this.fillerElem = filler;
        this.supplementsElem = supplements;
        this.priceElem = price;
        this.calloriesElem = calories;
    }

    editBurgerSize(block) {
        this.burgerSize = block.querySelector('.selectorTitle').textContent
        this.price += +block.dataset.price
        this.callories += +block.dataset.calories
        this.dropCheckBox(block)
        block.querySelector('.selectorCheck').style.display = 'block'
        this.render()
    }

    editFiller(block) {
        this.burgerFiller = block.querySelector('.selectorTitle').textContent
        this.price += +block.dataset.price
        this.callories += +block.dataset.calories
        this.dropCheckBox(block)
        block.querySelector('.selectorCheck').style.display = 'block'
        this.render()
    }

    addSupplements(block) {
        this.burgerSupplements.push(block.querySelector('.selectorTitle').textContent)
        this.price += +block.dataset.price
        this.callories += +block.dataset.calories
        block.querySelector('.selectorCheck').style.display = 'block'
        this.render()
    }

    delSupplements(block) {
        let index = this.burgerSupplements.indexOf(block.querySelector('.selectorTitle').textContent);
        if (index > -1) {
            this.burgerSupplements.splice(index, 1);
        }
        this.price -= +block.dataset.price
        this.callories -= +block.dataset.calories
        block.querySelector('.selectorCheck').style.display = 'none'
        this.render()
    }

    dropCheckBox(block) {
        let elems = block.parentNode.querySelectorAll('.selector');
        for (let elem of elems) {
            if (elem.querySelector('.selectorCheck').style.display == 'block') {
                this.price -= +elem.dataset.price
                this.callories -= +elem.dataset.calories
                elem.querySelector('.selectorCheck').style.display = 'none'
            }
        }
    }

    render() {
        if (this.burgerSize) {
            document.querySelector(this.finalSizeElem).textContent = this.burgerSize;
        }
        if (this.burgerFiller) {
            document.querySelector(this.fillerElem).textContent = this.burgerFiller;
        }
        if (this.burgerSupplements.length > 0) {
            document.querySelector(this.supplementsElem).textContent = this.burgerSupplements.join(', ');
        }
        document.querySelector(this.priceElem).textContent = this.price;
        document.querySelector(this.calloriesElem).textContent = this.callories;
    }
}

let burger = new Burger('#finalSize', '#filler', '#supplements', '#price', '#calories')

document.querySelector('.burgerSize').addEventListener('click', (event) => {
    if (event.target.className == 'selectorBox') {
        burger.editBurgerSize(event.target.parentNode)
    }
})

document.querySelector('.fillers').addEventListener('click', (event) => {
    if (event.target.className == 'selectorBox') {
        burger.editFiller(event.target.parentNode)
    }
})

document.querySelector('.supplements').addEventListener('click', (event) => {
    if (event.target.className == 'selectorBox') {
        burger.addSupplements(event.target.parentNode)
    } else if (event.target.className == 'selectorCheck') {
        burger.delSupplements(event.target.parentNode.parentNode)
    }
})