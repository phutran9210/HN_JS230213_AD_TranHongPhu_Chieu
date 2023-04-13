import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
const products = [
  {
    id: 1,
    title: "Cola",
    price: 6,
    image:
      "https://ayb.akinoncdn.com/products/2019/01/18/3544/5aa1ee14-1c83-4213-a62b-773c4785e187_size780x780_quality60_cropCenter.jpg",
  },
  {
    id: 2,
    title: "Fanta",
    price: 5,
    image:
      "https://www.coca-cola.com.tr/content/dam/one/tr/tr/product-images/fanta-portakal_product_image.png",
  },
  {
    id: 3,
    title: "Sprite",
    price: 5,
    image: "https://images.ofix.com/product-image/s99509_2.jpg",
  },
  {
    id: 4,
    title: "Ayran",
    price: 3,
    image:
      "https://konyamevlana.com/florya/wp-content/uploads/2020/12/sutas-ayran-285ml.jpg",
  },
  {
    id: 5,
    title: "Salgam",
    price: 4,
    image: "http://esenlik.com.tr//images/prod/5704.jpg",
  },
  {
    id: 6,
    title: "Cay",
    price: 3,
    image:
      "https://evidea.akinoncdn.com/products/2021/08/05/62421/e5bda9ce-91bf-453a-96e1-acea983efb2a.jpg",
  },
  {
    id: 7,
    title: "Kahve",
    price: 10,
    image:
      "https://media.istockphoto.com/photos/turkish-coffee-foamy-picture-id510413268?k=20&m=510413268&s=612x612&w=0&h=llBhDOUbNHaQXc-ch7UQ_OIWkmJAJUzaf6oZavKUrmQ=",
  },
  {
    id: 8,
    title: "Soda",
    price: 4,
    image: "http://esenlik.com.tr//images/prod/2928.jpg",
  },
  {
    id: 9,
    title: "Bisiklet",
    price: 1000,
    image: "https://productimages.hepsiburada.net/s/37/375/10567819821106.jpg",
  },
  {
    id: 10,
    title: "Lüx Kol Saati",
    price: 25000,
    image:
      "https://www.dogansaatcilik.com.tr/ProductImages/118687/big/seiko-ssc719p-erkek-kol-saati__0296960735052182.jpg",
  },
  {
    id: 11,
    title: "Bugatti Chiron",
    price: 2500000,
    image: "https://productimages.hepsiburada.net/s/34/375/10460429320242.jpg",
  },
  {
    id: 12,
    title: "Iskender",
    price: 50,
    image:
      "https://img3.aksam.com.tr/imgsdisk/2020/10/31/t25_en-kolay-iskender-sosu-ta-744.jpg",
  },
  {
    id: 13,
    title: "Lahmacun",
    price: 12,
    image:
      "https://cdn.yemek.com/mnresize/940/940/uploads/2020/04/lahmacun-yeni-one-cikan.jpg",
  },
  {
    id: 14,
    title: "Malikane",
    price: 2500000000,
    image:
      "https://foto.haberler.com/haber/2020/12/07/israil-de-4-odali-malikane-250-milyon-dolarda-13784975_amp.jpg",
  },
  {
    id: 15,
    title: "Helicopter",
    price: 28750000,
    image:
      "https://image.elitema.com.tr/db_images/224/4/11/arimg1138-8---bell-429-exter%C4%B1or.jpg",
  },
  {
    id: 16,
    title: "Luxury Yatch",
    price: 17500000,
    image: "https://d.neoldu.com/news/57966.jpg",
  },
  {
    id: 17,
    title: "Limosine",
    price: 1000000,
    image:
      "https://img.paratic.com/dosya/2015/03/dunyanin-en-pahali-limuzinleri-1024x683.jpg",
  },
  {
    id: 18,
    title: "Ada",
    price: 125000000,
    image: "https://icdn.ensonhaber.com/resimler/galeri/1_11195.jpg",
  },
  {
    id: 22,
    title: "Stadium",
    price: 2500000,
    image:
      "https://cdnuploads.aa.com.tr/uploads/Contents/2020/06/01/thumbs_b_c_dc24a18cc233bd960f410911f5d39bf2.jpg",
  },
  {
    id: 23,
    title: "Bitcoin",
    price: 60000,
    image:
      "https://www.cumhuriyet.com.tr/Archive/2021/9/27/1872247/kapak_141123.jpg",
  },
  {
    id: 19,
    title: "Messi Tshirt",
    price: 250,
    image:
      "https://st2.myideasoft.com/idea/fr/55/myassets/products/366/paris-saint-germain-cup-away-stadium-shirt-2021-22-kids-with-messi-30-printing-ss4-p-12087703-u-6v44pc9ht2ynaiyuv5uk-v-af3dfad2f9b44448a3068821419095db_min.jpg?revision=1628627354",
  },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [balance, setBalance] = useState(100000000000000000000000);
  const addToCart = (product, quantity) => {
    const cost = product.price * quantity;
    if (balance >= cost) {
      setCart((prevCart) => {
        const existingProduct = prevCart.find((item) => item.id === product.id);
        if (existingProduct) {
          return prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          return [...prevCart, { ...product, quantity }];
        }
      });
      setBalance((prevBalance) => {
        const newBalance = prevBalance - cost;
        console.log(`New balance: ${newBalance.toLocaleString()}`);
        return newBalance;
      });
    } else {
      alert("Số tiền không đủ để mua sản phẩm này.");
    }
  };

  const interest = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      if (existingProduct.quantity > 1) {
        setCart(
          cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );
      } else {
        setCart(cart.filter((item) => item.id !== product.id));
      }
    }
  };
  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      return updatedCart;
    });
  };
  const CartItem = ({ item, updateQuantity }) => {
    return (
      <div className="cart-item">
        <div>{item.title}</div>
        <div>{item.price} USD</div>
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) =>
            updateQuantity(item.id, parseInt(e.target.value) || 1)
          }
        />
        <div>Total: {item.price * item.quantity} USD</div>
      </div>
    );
  };

  const clearCart = () => {
    setCart([]);
  };
  return (
    <div>
      <div id="header">
        To Spend {balance.toLocaleString()} USD You Have Money
      </div>

      <div className="App">
        <header className="App-header"></header>
        <ProductList
          products={products}
          addToCart={addToCart}
          interest={interest}
        />
      </div>
      <Cart cart={cart} />
      <button className="clear-cart-button" onClick={clearCart}>
        Clear Cart
      </button>
      <div className="cart">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} updateQuantity={updateQuantity} />
        ))}
      </div>
    </div>
  );
}
