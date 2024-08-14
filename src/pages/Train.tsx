import react from "../assets/react.svg"
import {searchImg} from  "../utils";

const Train = () => {
  return (
    // <div className="w-full h-full absolute bg-gradient-to-r from-blue-400 to-emerald-400">
        <header className="h-7 flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md">
  
            <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
                <li className="list-none"><a href="#">
                <img src={react} alt="" className="w-10 hover:scale-120 transition-all"/>
                </a></li>
                <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer list-none">Home</li>
                <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer list-none">Pages</li>
                <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer list-none">Products</li>
                <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer list-none">Blog</li>
                <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer list-none">Shop</li>
                <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer list-none">Contact</li>
            </ul>
            <div className="relative hidden md:flex items-center justify-center gap-4 bg-pink pr-5 cursor-pointer">
                
                    <input type="text" placeholder="Search..." className="py-2 pl-10 border-2 border-pink focus:bg-slate-100 focus:outline-pink-500"/>
                    <img src={searchImg} alt="wishlist" width={20} height={20}/>

            </div>
        </header>
    // </div>
  )
}

export default Train