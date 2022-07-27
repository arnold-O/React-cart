import React from 'react'

import  { useGlobalContext } from "./Context";




  

  
  export default function Navbar() {
  const {amount} = useGlobalContext()
  return (
    <>
    <div className='headerSection'>
        <div className='mainSection'>
        <div>
        <p>ArnoldOnline</p>
        </div>
        <div className='iconRight'>
       
            <p>cart</p>
            <p className='position-abs'>{amount}</p>
         
        </div>

        </div>

    </div>
     <h1 className='cart-title'>Your Bag</h1>
     </>
  )
}
