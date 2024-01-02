import React, { useState } from 'react'
import { useCreateContextUseContext } from './ProviderContext'
import CartDisplay from './CartDisplay'
import style from "./UI/Style.module.css"
import Buy from './Buy'

const CartContent = () => {
    const { carts } = useCreateContextUseContext()
    if (carts.length === 0) {
        return <h1 style={{
            textAlign: "center",
            marginTop: "1rem"
        }}>No Data Found</h1>
    }
const [open , setIsOpen]=useState(false)
    let totalPrice = carts.reduce((acc, item) => {
        return acc += item.quantity * item.price
    }, 0)
    return (
        <div>
            {carts.map(item => <CartDisplay {...item} key={item.id} />)}
            <h1 className={style.totalPrice}> Total Price : &#8377; {totalPrice} </h1>
            <button className={style.productBTNbuy} onClick={() => {
               setIsOpen(true)
            }}>Buy now</button>

            {open &&  <Buy />}
        </div>
    )
}

export default CartContent