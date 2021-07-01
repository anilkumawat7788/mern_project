import React,{useState} from "react";
import "./cart.css";
import { Scrollbars } from "react-custom-scrollbars-2";
import Iteam from './Iteam';
import  products  from './Products';
const Cart = () => {
    const [item, setItem] = useState(products)
  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src="./images/download.png" alt="" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div>
        <div className="cart-icon">
          <img src="./images/cart.svg" alt="" />
          <p>5</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>shopping cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">5</span> items
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
            {
                item.map((curElem) => {
                    return <Iteam key={curElem.id} {...curElem }/>

                })
            }
          
            </Scrollbars>
          </div>
        </div>
        <div className="card-total">
            <h3>cart Total : <span>50000rs</span></h3>
        </div>
      </section>
    </>
  );
};
export default Cart;
