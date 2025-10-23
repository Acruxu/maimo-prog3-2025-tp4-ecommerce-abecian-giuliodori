'use client'
import React from 'react'
import { useShopContext } from '../contexts/ShopContext';
import {useEffect} from "react";

const ProductContainer = ({id}) => {
    const{ getOneProduct, product, handleAddToCart} = useShopContext();

    useEffect(() => {
        getOneProduct(id);
    }, []);

    const addToCart = (product) => {


      handleAddToCart (product)
    }
    
  return (<div>
    <h1>{product.name}</h1>
    <button onClick={() => AddToCart (product)}>Agregar al carrito</button>
    </div>
  )
}

export default ProductContainer;

