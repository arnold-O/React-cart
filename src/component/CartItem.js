import React, { useState } from "react";
import  { useGlobalContext } from "./Context";



export default function CartItem() {
  

  const {cart , clearCart, removeOne, increasItem, decreaseItem} = useGlobalContext()

  return (
    <div className="cartSection">
      {cart.map((item) => {
        const { price, name, id, img , amount} = item;

        return (
          <div key={id} className="cartFirst">
            <div className="sectionLeft">
              <div className="imgSection">
                <img src={img} alt="" />
              </div>
              <div className="detailsContainer">
                <p className="itemName">{name}</p>
                <p className="price">${price}</p>

                <button className="btn-remove" onClick={()=>removeOne(id)}>Remove</button>
              </div>
            </div>
            <div className="counter-section">
              <svg onClick={()=>increasItem(id)}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 svg-first firstSVG"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
                />
              </svg>
              <p>{amount}</p>
              <svg onClick={()=>decreaseItem(id)}
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 svg-first secondSVG"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                />
              </svg>
            </div>
          </div>
        );
      })}
      <hr />

      <div className="total-section">
        <p>Total</p>
        <p>$0.00</p>
      </div>

      <div class="clear-cart-btn">
        <button onClick={clearCart} >CLEAR CART</button>
      </div>
    </div>
  );
}
