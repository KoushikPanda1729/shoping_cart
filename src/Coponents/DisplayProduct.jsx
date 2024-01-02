import React from 'react'
import style from './UI/Style.module.css'
import { useCreateContextUseContext } from './ProviderContext'
import { toast } from 'react-toastify';
const DisplayProduct = ({ id, img, title, price }) => {
    const { addCart, carts } = useCreateContextUseContext();
    const newCart = {
        id: id,
        img: img,
        title: title,
        price: price,
        quantity: 1
    }
    return (
        <div className={style.productStyle}>

            <img src={img} alt={title} />
            <p className={style.title}>{title}</p>
            <p className={style.price}>&#8377; {price}</p>
            <button className={style.productBTN} onClick={() => {
                for (let item of carts) {
                    if (item.id === id) {
                        toast.info("Already Exists")
                        return;
                    }
                }
                toast.info("Added")
                addCart(newCart)
            }}>Add to cart</button>
        </div>
    )
}

export default DisplayProduct