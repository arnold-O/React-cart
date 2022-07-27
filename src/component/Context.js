import React, { useContext, useReducer, useState } from "react"
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


    const clearCart = ()=>{
        dispatch({type:"CLEAR_CART"})
    }

    const removeOne = (id)=>{

      dispatch({type:"REMOVE_ONE", payload:id})

    }

   return <AppContext.Provider
    value={{
      ...state, clearCart, removeOne
    }}
  >
    {children}
  </AppContext.Provider>

}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppProvider, AppContext }