import React from 'react'
import { createPortal } from 'react-dom'
import style from './UI/Style.module.css'


const Modal = ({ children, closeCart }) => {
    return createPortal(
        <>
            <div className={style.backWard} onClick={() => closeCart()}></div>
            <div className={style.cartContent}> {children}</div>
        </>, document.getElementById("modal"))
}

export default Modal