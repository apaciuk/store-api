import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const client_id = import.meta.env.VITE_CLIENT_ID;
  const client_secret = import.meta.env.VITE_CLIENT_SECRET;

  const products = () => {
    const [products, setProducts] = useState([]);
    };
    axios
      .get("https://fakestoreapi.com/products", data)
      .then((response) => {
        setProducts(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {

      return (
        <div className="App">
          <h1>Products</h1>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <img src={product.image} alt={product.title} />
              </li>
            ))}
          </ul>
        </div>
      );
    }

export default App;

