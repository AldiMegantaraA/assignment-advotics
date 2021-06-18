import React from 'react';
import FotoProduct from '../../assets/product.png'
import './sku-card.styles.scss'

export default function SkuCard({carCart}) {

    return (
     
            <div className='sku-card'>
                <div className='product-foto'>
                    <img src={FotoProduct} alt="" />
                </div>
                <div className='product-detail'>
                    <p className='nama-product'>Name Product</p>
                    <div className='subtitle-product'>
                        <p style={{marginRight:'12px'}}>Rp xxx</p>
                        <p>Jml Terjual</p>
                    </div>
                </div>
            </div>
   
    )
}