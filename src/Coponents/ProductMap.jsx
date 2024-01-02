import React from 'react'
import { ProductContent } from './ProductContent';
import DisplayProduct from './DisplayProduct';
import style from "./UI/Style.module.css"

const ProductMap = () => {
    return (
        <div className={style.gridView}>
            {ProductContent.map(item => <DisplayProduct key={item.id} {...item} />)}
        </div>
    )
}

export default ProductMap