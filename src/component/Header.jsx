import { Link } from "react-router-dom";
function Header(){
    return(
        <header>
            <div className="text-center p-2 bg-amber-600 text-4xl font-bold"> ATOM_EXPERT TECH</div>
            <div className="flex justify-center gap-20 p-9 text-3xl text-blue-500">
               <nav>
                    <Link to="/" className="text-blue-500 hover:text-black">Home</Link>
                    <Link to="/" className="text-blue-500 hover:text-black ml-5">About Us</Link>
                    <Link to="/shop" className="text-blue-500 hover:text-black ml-5">Products</Link>
                    <Link to="/" className="text-blue-500 hover:text-black ml-5">Customers</Link>
                  
                    <button>
                        <Link to="/Login" className="ml-25 rounded-3xl  bg-amber-800 pl-2 pr-2" >Login</Link>
                    </button>
                    <button className="ml-10">
                        <Link to="/Yuplogin" className="ml-2 rounded bg-red-600 text-white">Yup</Link>
                    </button>
                    {/* <li>Home</li>
                    <li>About Us</li>
                    <li>Products</li>
                    <li>Customers</li> */}
               </nav>
            </div>
        </header>
    )
}
export default Header;