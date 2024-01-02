import React, { createContext, useContext, useReducer } from 'react'

const ContextCreate = createContext()
const cartReducer = (carts, action) => {
    if (action.type === "ADD_CART") {
        return [...carts, action.payload]
    }
    if (action.type === "INCREASE_QYT") {
        return carts.map(item => {
            if (item.id === action.payload) {
                return { ...item, quantity: item.quantity + 1 }
            } else {
                return item;
            }
        })
    }
    if (action.type === "DECREASE_QYT") {
        return carts.map(item => {
            if (item.id === action.payload) {
                return { ...item, quantity: item.quantity - 1 }
            } else {
                return item;
            }
        })
    }

    if (action.type === "REMOVE") {
        return carts.filter(item => item.id !== action.payload)
    }
    return carts;
}
const ProviderContext = ({ children }) => {
    const [carts, dispatch] = useReducer(cartReducer, [])

    const addCart = (newCart) => {
        dispatch({ type: "ADD_CART", payload: newCart })
    }

    const increaseQyt = (id) => {
        dispatch({ type: "INCREASE_QYT", payload: id })
    }
    const decreaseQyt = (id) => {
        dispatch({ type: "DECREASE_QYT", payload: id })
    }
    const remove = (id) => {
        dispatch({ type: "REMOVE", payload: id })
    }
    return (
        <ContextCreate.Provider value={{ carts, addCart, increaseQyt, decreaseQyt, remove }}>
            {children}
        </ContextCreate.Provider>
    )
}

export const useCreateContextUseContext = () => useContext(ContextCreate)

export default ProviderContext