import React from "react";

export default function CartItem() {
  return (
    <div className="cartSection">
        <div className="cartFirst">
      <div className="sectionLeft">
        <div className="imgSection">
          <img src="https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/v2/fashion_220x220.png" alt="" />
        </div>
        <div  className="detailsContainer">
          <p className="itemName">title of item</p>
          <p className="price">price</p>
       
          <button className="btn-remove">Remove</button>
      
        </div>
      </div>
      <div className="counter-section">
        <svg
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
        <p>0</p>
        <svg
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
      <div className="cartFirst">
      <div className="sectionLeft">
        <div className="imgSection">
          <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/321284/1.jpg?4212" alt="" />
        </div>
        <div  className="detailsContainer">
          <p className="itemName">title of item</p>
          <p className="price">price</p>
       
          <button className="btn-remove">Remove</button>
      
        </div>
      </div>
      <div className="counter-section">
        <svg
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
        <p>0</p>
        <svg
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
    </div>
  );
}
