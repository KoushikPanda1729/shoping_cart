import React from 'react'
import { createPortal } from 'react-dom'
import style from './UI/Style.module.css'

const BuyingModel = ({ children, buyClose }) => {
    return createPortal(<>
        <div className={style.backWardBuy} onClick={() => {
            buyClose()
        }}></div>
        <div className={style.buyNow}>{children}</div>
    </>, document.getElementById("buyModal"))
}

export default BuyingModel