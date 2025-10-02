"use client";

import { useState, useEffect, useContext, createContext } from "react";
//import axios from react 
const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState ([])


  useEffect(()=>{
    console.log(cart)
  },[cart])

  const getAllProducts = useCallBack (async () => {
    try {
        const res = await axios.get(`http://localhost:400/products`)
        console.log('products', res.data)
        setProducts
    }
        catch (error) {
            console.log (error)
        }
   
  },[]);

  useEffect(() => {
    getAllProducts()
  },[])

 const handleAddToCart = () => {
    // setCart('')
 }

  const cartQty = () => cart.length

  return (
    <ShopContext.Provider
      value={{
        handleAddToCart,
        cartQty
        //products
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShopContext must be used within a ShopContextProvider");
  }
  return context;
};

export default ShopContext;