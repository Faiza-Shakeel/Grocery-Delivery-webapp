 import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// 1. Create Context
const AppContext = createContext();

// 2. Create Provider (wraps your whole app)
export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [seller, setIsSeller] = useState(false);
    const [showUserLogin, setshowUserLogin] = useState(false);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
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
        setshowUserLogin,
        cart,
        favorites,
        addToCart,
        removeFromCart,
        toggleFavorite,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// 3. Custom hook (easier to use)
export const useAppContext = () => useContext(AppContext);
