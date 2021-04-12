import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: "Apple",
    description: "CCO (Chief Cat Officer)",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  },
  {
    id: 2,
    name: "A Cat",
    description: "CCO (Chief Cat Officer)",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  },
  {
    id: 3,
    name: "Milk",
    description: "Milk for the lactose tollerent",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  },
  {
    id: 4,
    name: "Banana",
    description: "I need those cards",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  },
  {
    id: 5,
    name: "Orange",
    description: "Orange are orange",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  }
];

function App() {
  const [cart, setCart] = useState([{
    id: 4,
    name: "Banana",
    description: "I need those cards",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100,
    units: 2
  }]);

  const handleAddFunc = (product) => {
    const existingProduct = cart.filter(p => p.id === product.id);

    if(existingProduct.length > 0){
      const withoutExistingProduct = cart.filter(p => p.id !== product.id);

      const updatedUnitsProduct = {...existingProduct[0], units: existingProduct[0].units + product.units}
      setCart([...withoutExistingProduct, updatedUnitsProduct])
    }else{
      setCart([...cart, product])
    }
  }
  return (
    <main className="pa3 pa5-ns flex flex-wrap">
      <ul>
        {cart.map(c => <li>{c.name} | units{c.units}</li>)}
      </ul>
      {
        products.map(p => <Products key={p.id} {...p} addFunc={handleAddFunc}/>)
      }
    </main>
  );
}

export default App;
