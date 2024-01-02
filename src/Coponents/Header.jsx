import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import CartContent from './CartContent'
import style from "./UI/Style.module.css"
import { FaShoppingCart } from "react-icons/fa";
import { useCreateContextUseContext } from './ProviderContext';

const Header = () => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const closeCart = () => setIsCartOpen(false)
    const { carts } = useCreateContextUseContext()


    let totoalQYT = carts.reduce((acc, item) => {
        return acc + item.quantity
    }, 0)
    useEffect(() => {
        if (isCartOpen) {
            document.documentElement.style.overflowY = "hidden"
        } else {
            document.documentElement.style.overflowY = "auto"
        }
    }, [isCartOpen])
    return (
        <div>
            <header className={style.header}>
                <nav className={style.nav}>
                    <div className="logo">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepngimg.com%2Fthumb%2Fonline_shopping%2F10-2-online-shopping-png-image.png&f=1&nofb=1&ipt=583672a51e5130e68797d90c82bd61a4b9ec24d0ef88056e21c7602d7254b4e7&ipo=images" alt="Logo" />
                    </div>
                    <button className={style.numberIcon} onClick={() => setIsCartOpen(true)}>
                        <span className={style.icon}><FaShoppingCart /></span>

                        {!!totoalQYT && <span className={style.number}>{totoalQYT}</span>}
                        Show cart </button>
                </nav>
                {isCartOpen && <Modal closeCart={closeCart}>
                    <CartContent />
                </Modal>}
            </header>
        </div>
    )
}

export default Header