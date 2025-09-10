import { NavLink,Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import { Outlet } from "react-router-dom";
 


const  SellerLayout = () => {
const {setIsSeller,navigate}=useAppContext()
    
 

    const sidebarLinks = [
        { name: "Add Product", path: "/seller",  icon: assets.add_icon},
        { name: "Product list", path: "/seller/ProductList", icon: assets.product_list_icon  },
        { name: "Orders", path: "/seller/orders", icon: assets.order_icon   },
    ];
const logout=()=>{
    setIsSeller(false)
     navigate("/seller");
}
    return (
        <>
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white  ">
                <Link  to="/">
                  <img src={assets.logo} alt="log" className="w-34 md:w-38 cursor-pointer"  />  
                </Link>
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! Admin</p>
                    <button onClick={logout} className='border rounded-full text-white text-sm px-4 py-1 bg-blue-700'>Logout</button>
                </div>
            </div>
            <div className="flex">  
                <div className="md:w-64 w-16 border-r h-100vh text-base border-gray-300 pt-4 flex flex-col ">
                {sidebarLinks.map((item, index) => (
                    <NavLink  to={item.path} key={item.name} end={item.path === "/seller"}
                        className={({isActive})=>`flex items-center py-3 px-4 gap-3 
                            ${isActive ? "border-r-4 md:border-r-[6px] bg-indigo-500/10 border-indigo-500 text-indigo-500"
                                : "hover:bg-gray-100/90 border-white text-gray-700"
                            }`
                        }
                    >
                       <img src={item.icon} alt="" className="w-7 h-7" />
                        <p className="md:block hidden text-center">{item.name}</p>
                    </NavLink>
                ))}

            </div>
             <div>
          <Outlet/>
             </div>
            </div>
          
        </>
    );
};
export default SellerLayout