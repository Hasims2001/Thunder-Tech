import { ADD_TO_CART, CART_TOTAL, CLEAR_CART, DECREASE_QUANTITY, DELETE_ITEM, INCREASE_QUANTITY } from "./actionType"




const initState = {
    cartproduct: [],
    cartAmount: 0
}



export const reducer = (state = initState, { type, payload, id, quantity }) => {
    switch (type) {

        case ADD_TO_CART: {
            return {
                ...state,
                cartproduct:[...state.cartproduct, payload]
            };
        }

        case INCREASE_QUANTITY: {
            let dataafterinccrese = state.cartproduct.map((element, index) => {
                if (element.id === id) {
                
                    return { ...element, quantity }
                } else {
                    return element
                }
            })
            return {
                ...state,
                cartproduct: dataafterinccrese
            }
        }

        case DECREASE_QUANTITY: {
            let dataafterdecrease = state.cartproduct.map((element, index) => {
                if (element.id === id) {
                    return { ...element, quantity }
                } else {
                    return element
                }
            })
            return {
                ...state,
                cartproduct: dataafterdecrease
            }
        }

        case DELETE_ITEM: {
            let filtertered = state.cartproduct.filter((ele) => {
                if (ele.id === id) {
                    return false
                } else {
                    return true
                }
            })

            return {
                ...state,
                cartproduct: filtertered
            }
        }

        case CART_TOTAL: {
            return {
                ...state,
                cartAmount: payload
            }
        }

        case CLEAR_CART: {

            return {
                ...state,
                cartproduct: [],
                cartAmount: 0
            }
        }

        default: {
            return state
        }
    }
}