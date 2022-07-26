import React, { useContext, useEffect, useReducer, useState } from "react"
import reducer from "../reducer";
import data  from "./data";

const AppContext = React.createContext()

const initialState = {
    loading:false,
    cart:data,
    total:0,
    amount:0
}


const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)

// clear entire cart
    const clearCart = ()=>{
        dispatch({type:"CLEAR_CART"})
    }

    // remove each product
    const removeOne = (id)=>{

      dispatch({type:"REMOVE_ONE", payload:id})

    }
// increase item in Cart
    const increasItem = (id)=>{
      dispatch({type:"INCREASE", payload:id})
    }
    // decrease item in Cart
    const decreaseItem = (id)=>{
      dispatch({type:"DECREASE", payload:id})
    }
    // get total


    useEffect(()=>{
      dispatch({type:"TOTAL"})

    },[state.cart])

   return <AppContext.Provider
    value={{
      ...state, clearCart, removeOne, increasItem, decreaseItem
    }}
  >
    {children}
  </AppContext.Provider>

}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppProvider, AppContext }