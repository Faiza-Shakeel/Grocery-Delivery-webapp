 import { createContext, useContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { dummyAddress, dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";
// 1. Create Context
const AppContext = createContext();

// 2. Create Provider (wraps your whole app)
export const AppContextProvider = ({ children }) => {
const currency= import.meta.VITE_CURRENCY

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [seller, setIsSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);
        const [products, setProducts] = useState([]);
         const [searchquery, setsearchquery] = useState([]);
  const [cartItem, setCartItem] = useState({});
  const [favorites, setFavorites] = useState([]);

  const fetchProducts = async () => {
    setProducts(dummyProducts)

  }
  useEffect(() => {
    fetchProducts();
 
  }, [ ])
  
  // Add item to cart
  const addToCart = (item) => {
    const cartData= structuredClone(cartItem)
    if(cartData[item]){
        cartData[item ] +=1
    }
    else{
        cartData[item] =  1
    }
    setCartItem(cartData)
    toast.success("Item added to cart")
  };
  // update item from cart
 const updateCart = (itemId,quantity) => {
    const cartData= structuredClone(cartItem)
  cartData[itemId]= quantity
    setCartItem(cartData)
     toast.success("cart updated successfully")
 }
  // Remove item from cart
  const removeFromCart = ( item) => {
       const cartData= structuredClone(cartItem)
    if(cartData[item]){
        cartData[item]  -=1
        if(cartData[item] ===0){
            delete cartData[item ]
    }
  
    setCartItem(cartData)
      toast.success("Item removed from cart")
  }
  };

  // Add/Remove favorites
  const toggleFavorite = (item) => {
    setFavorites((prev) =>
      prev.find((fav) => fav.id === item.id)
        ? prev.filter((fav) => fav.id !== item.id)
        : [...prev, item]
    );
  };

  return (
    <AppContext.Provider
      value={{
        navigate,
        user,
        setUser,
        seller,
        setIsSeller,
        showUserLogin,
        setShowUserLogin,
        searchquery, setsearchquery,
        
        favorites,
        addToCart,
        removeFromCart,
        toggleFavorite,
        products,
        currency,
        updateCart,
        cartItem,
    
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// 3. Custom hook (easier to use)
export const useAppContext = () => useContext(AppContext);
