class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
        this.render();//вывод товаров на страницу
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }

    getProductSum() {
        let sum = 0;
        for(let product of this.goods){
            sum += product.price
        }
        return sum
    }
    
   
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
             const item = new ProductItem(product);
             block.insertAdjacentHTML("beforeend",item.render());
//           block.innerHTML += item.render();
        }
    }
}

class ProductItem{
    constructor(product,img='https://via.placeholder.com/200x150'){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render(){
           return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}



let list = new ProductList();
console.log(list.getProductSum())

class CartList{
    constructor(){
        this.goods = {};
        this.totalCount = 0;
        this.totalSumm = 0;
    }

    addItem(item) {
        /*
        добавит товар в this.goods увеличит счетчики общего кол-ва и общую сумму
        товары в this.goods имеют струтктуру:
        this.goods = {
        1 : {id: 1, title: 'Notebook', price: 2000, count: 1, price_sum: 2000}
        }
         this.goods - подразумеваю сделать объектом, чтоб при обавлении товара не перебирвать массив для поиска,
         а проверить ид товара на существование внутри объекта
         даная структура, но мой взгляд позволит сделать метод универсальным его можно будет использовать как для
         добавления нового товара со страницы так и для увеличения кол-ва товаров уже в корзине
         в случае если товара не было в корзине ранее - вызовет метод который отрисует новый товар
         */
    }

    dropItem(item, dropAll = false) {
        /*
        метод используется если пользователь уменьшает кол-во одинакового товара в корзине
        если передать dropAll - true - сотрет все подобные товары
         */
    }

    clearAll() {
        /*
        отчистка всей корзины
         */
    }

    discount() {
        /*
        как вариант можно использовать для разных афилятских программ - типо купи на 100р получи скидку 10%
         */
    }

    buy () {
        /*
        в зависимости от дальнейшей логики либо передаст куда то информацию о выбраных товарах либо вызовет метод
        оплаты и доставки на этой же странице и отчистит корзину
         */
    }

    render() {
        /*
        получит на вход измененный товар и перерисует его в корзине
         */
    }
}

class CartItem{
    constructor(product){

    }
    render(){
    }
}


//const products = [
//    {id: 1, title: 'Notebook', price: 2000},
//    {id: 2, title: 'Mouse', price: 20},
//    {id: 3, title: 'Keyboard', price: 200},
//    {id: 4, title: 'Gamepad', price: 50},
//];
//
//const renderProduct = (product,img='https://placehold.it/200x150') => {
//    return `<div class="product-item">
//                <img src="${img}">
//                <h3>${product.title}</h3>
//                <p>${product.price}</p>
//                <button class="buy-btn">Купить</button>
//            </div>`
//};
//const renderPage = list => document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
//
//renderPage(products);