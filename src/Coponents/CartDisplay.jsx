import React from 'react'
import style from "./UI/Style.module.css"
import { useCreateContextUseContext } from './ProviderContext'
import { CgRemove } from "react-icons/cg";
import { GrAddCircle } from "react-icons/gr";
import { ImCross } from "react-icons/im";
import { toast } from 'react-toastify';





const CartDisplay = ({ id, title, img, price, quantity }) => {
    const { increaseQyt, decreaseQyt, remove } = useCreateContextUseContext()
    return (
        <div className={style.cartItem}>
            <div className={style.imgTitle}>
                <img src={img} alt={title} />
                <p>{title}</p>
            </div>

            <div className={style.rightContent}>
                <div className={style.incQytDec}>
                    <div onClick={() => {
                        increaseQyt(id)
                        toast.info
                            ("Added")
                    }}><GrAddCircle /></div>
                    <p>{quantity}</p>
                    <div onClick={() => {
                        if (quantity <= 1) {
                            return;
                        }
                        decreaseQyt(id)
                        toast.info
                            ("Removed")
                    }}><CgRemove /></div>
                </div>
                <p className={style.priecCart}>&#8377; {price * quantity}</p>

                <div className={style.removeCart} onClick={() => {
                    remove(id)
                    toast.info
                        ("Deleted")
                }}><ImCross /></div>

            </div>


        </div>
    )
}

export default CartDisplay