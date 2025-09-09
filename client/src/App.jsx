import { useLocation, Routes, Route } from 'react-router-dom';
import { useAppContext } from './context/AppContext';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import ProductCategory from './components/ProductCategory';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import AddAdress from './pages/AddAdress';
import MyOrders from './pages/MyOrders';
import SellerLogin from './components/Seller/SellerLogin';
import SellerLayout from './pages/Seller/SellerLayout';
import AddProduct from './pages/Seller/AddProduct';
import ProductList from './pages/Seller/ProductList';
import Orders from './pages/Seller/Orders';
import Login from './components/Login';
import { Toaster } from 'react-hot-toast';

function App() {
  const { showUserLogin,  IsSeller } = useAppContext();
  const isSellerRoute = useLocation().pathname.includes('seller');

  return (
    <div className="text-default min-h-screen bg-white text-gray-700">
      {/* NavBar hidden on seller routes */}
      {!isSellerRoute && <NavBar />}
      {showUserLogin && <Login />}
      <Toaster />

      <div className={`${isSellerRoute ? "" : "px-6 md:px-16 lg:px-24"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<AllProducts />} />
          <Route path="/Products/:category" element={<ProductCategory />} />
          <Route path="/Products/:category/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/AddAdress" element={<AddAdress />} />
          <Route path="/My-orders" element={<MyOrders />} />

          {/* Seller Protected Routes */}
          <Route
            path="/seller"
            element={ IsSeller ? <SellerLayout /> : <SellerLogin />}
          >
            <Route index element={<AddProduct />} />
            <Route path="ProductList" element={<ProductList />} />
            <Route path="Orders" element={<Orders />} />
          </Route>
        </Routes>
      </div>

      {/* Footer hidden on seller routes */}
      {!isSellerRoute && <Footer className="mt-24" />}
    </div>
  );
}

export default App;
