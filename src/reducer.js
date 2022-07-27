

const reducer = (state, action)=> {

    if(action.type === "CLEAR_CART"){
        return {...state, cart:[]}
    }

    if(action.type === "REMOVE_ONE"){
        return {...state,  cart:state.cart.filter((item)=> item.id !== action.payload) }
    }

    if(action.type === "INCREASE"){

        const newValue = state.cart.map((item)=>{
            if(item.id === action.payload){
                return {...item, amount:item.amount+1}
              
            }
            return item
        })

        return {...state, cart:newValue}

    }

    if(action.type === "DECREASE"){
        const newValue = state.cart.map((item)=>{
            if(item.id === action.payload){
                return {...item, amount:item.amount - 1}

            }
            return item
        }).filter((item)=>item.amount !== 0)
        return {...state, cart:newValue}    
    }


    return state
}



export default reducer