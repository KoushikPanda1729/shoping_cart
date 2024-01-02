import React from 'react'
import { useCreateContextUseContext } from './ProviderContext'
import CartDisplay from './CartDisplay'
import style from "./UI/Style.module.css"

const CartContent = () => {
    const { carts } = useCreateContextUseContext()
    if (carts.length === 0) {
        return <h1 style={{
            textAlign: "center",
            marginTop: "1rem"
        }}>No Data Found</h1>
    }

    let totalPrice = carts.reduce((acc, item) => {
        return acc += item.quantity * item.price
    },0)
    return (
        <div>
            {carts.map(item => <CartDisplay {...item} key={item.id} />)}
            <h1 className={style.totalPrice}> Total Price : &#8377; {totalPrice} </h1>
        </div>
    )
}

export default CartContent