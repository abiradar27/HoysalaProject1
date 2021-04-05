import React from 'react';
import flower from './../../assets/flower.jpg'
import Garden from './../../assets/kitchen_garden.jpg'
import './styles.scss'

const ProductCategory = props =>{
    return(
        <div className="productscategory">
            <div className="wrap">
                <div className="item" style={{ backgroundImage: `url(${flower})`}}>
                     <a> Shop Spritual Products</a>
                </div>
      
                <div className="item" style={{
                    backgroundImage: `url(${Garden})`
                }}>
                 <a> Shop Garden Products</a>
                </div>
            </div>
        </div>
    )
}

export default ProductCategory;