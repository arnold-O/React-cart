

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

    if(action.type === "TOTAL"){

        let {total, amount} = state.cart.reduce((cartTotal, item)=>{

            const {price, amount} = item
         

            cartTotal.amount += amount;
            cartTotal.total += price * amount

            return cartTotal
        })


                total = parseFloat(total.toFixed(2))



        return {...state, total:total, amount:amount}
    }


    return state
}



export default reducer