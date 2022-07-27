import React, { useContext, useState } from "react"
import data  from "./data";

const AppContext = React.createContext()


const AppProvider = ({children})=>{
    const [cart, setCart] = useState(data)

   return <AppContext.Provider
    value={{
      cart,
    }}
  >
    {children}
  </AppContext.Provider>

}



export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppProvider, AppContext }