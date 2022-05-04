// const XMLHttpRequest = require("xhr2");
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
// переписать на промис (!!!!!!!не fetch !!!!!!!!!!)
// Далее НЕ ИСПОЛЬЗОВАТЬ В КОДЕ!
// let getRequest = (url, cb) => {
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', url, true);
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//       if (xhr.status !== 200) {
//         console.log('Error');
//       } else {
//         cb(xhr.responseText);
//       }
//     }
//   };
//   xhr.send();
// };
// ---------------------------------

//Переписал на промисы - в классе переписал функцию fetchGoods внутри класса которая работает с этим промисом
let getRequest = (url) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status !== 200) {
          console.log('Error');
          reject('Error');
        } else {
          resolve(xhr.responseText);
        }
      }
    };
    xhr.send();
  });
}

class ProductList {
  constructor(container = '.products') {
    this.container = document.querySelector(container);
    this.goods = [];
    this.productObjects = [];

    // this.fetchGoods();
    // this.render();

    this.getProducts()
      .then((data) => {
        this.goods = data;
        this.render();
      });
  }

  // fetchGoods() {
  //   getRequest(`${API}/catalogData.json`).then((data) => {
  //     console.log(data);
  //     this.goods = JSON.parse(data);
  //     this.render();
  //   }, (error) => {
  //     console.log(error)
  //   });
  // }

  getProducts() {
    return fetch(`${API}/catalogData.json`)
      .then(response => response.json())
      .catch(err => console.log(err));
  }

  render() {
    for (const good of this.goods) {
      const productObject = new ProductItem(good);
      console.log(productObject);
      this.productObjects.push(productObject);

      this.container.insertAdjacentHTML('beforeend', productObject.getHTMLString());
    }
  }
}

class ProductItem {
  constructor(product, img = 'https://via.placeholder.com/200x150') {
    this.id = product.id;
    this.title = product.title;
    this.price = product.price;
    this.img = img;
  }

  getHTMLString() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
  }
}

new ProductList();

class Cart {
  constructor(container = '.cart') {
    this.container = document.querySelector(container);
    this.goods = {};
    this.cartObjects = [];
    this.updateCart()
    }

  updateCart() {
    this.getRequest('getBasket.json')
        .then((data) => {
          this.amount = data.amount;
          this.goods = data.contents;
          this.countGoods = data.countGoods;
          this.render();
        });
  }

  getRequest(method) {
    return fetch(`${API}/${method}`)
        .then(response => response.json())
        .catch(err => console.log(err));
  }

  //Я так понимаю что в данный метод должна быть передана информация о продукте, которая пост запросом отправится
  //на сервер и если сервер ответил 1 - мы просто переобновляем корзину - как вариант можно пересчитать товар в
  //корзине и внутри класса но думаю это лишнее - обработка ответа сервера имеет формально как мне видится значение
  addProduct() {
    this.getRequest('addToBasket.json')
        .then((data) => {
          console.log(data);
          this.updateCart();
        })
  }

  dropProduct() {
    this.getRequest('deleteFromBasket.json')
        .then((data) => {
          console.log(data);
          this.updateCart();
        })
  }

  finalString() {
    this.container.insertAdjacentHTML('beforeend',
        `<h3>Итого товаров  ${this.countGoods}, на сумму ${this.amount} \u20bd </h3>`);
  }

  render() {
    this.container.innerHTML = '';
    for (const good of this.goods) {
      console.log(good)
      const cartObject = new CartItem(good);
      console.log(cartObject);
      this.cartObjects.push(cartObject);
      this.container.insertAdjacentHTML('beforeend', cartObject.getHTMLString());
    }
    this.finalString()
  }
}

class CartItem {
  constructor(product) {
    this.id = product.id_product;
    this.title = product.product_name;
    this.price = product.price;
    this.quantity = product.quantity;
  }

  getHTMLString() {
    return `<div class="cart-product-item" data-id="${this.id}">
                    <p>${this.title} |</p>
                    <p>${this.price} \u20bd|</p>
                    <p>${this.quantity}</p>
            </div>`;
  }
}

let test_cart = new Cart()