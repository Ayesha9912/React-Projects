import React from 'react';
import { RiCloseLine } from "react-icons/ri";
const Sidebar = ({sidebarClose, sidebar, cart}) => {
    const calculateTotalPrice = (item) => {
        return item.price * item.amount;
    };
    return (
        <div className={`fixed top-0 right-0 w-96 bg-gray-900 h-full overflow-y-auto z-50 ${sidebar ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
            <div className="flex justify-between items-center p-4">
                <h2 className="text-2xl font-semibold text-white">Shopping Cart</h2>
                <button onClick={sidebarClose} className="text-white text-3xl focus:outline-none">
                    <RiCloseLine/>
                </button>
            </div>
            <div className="px-4 py-6">
                {cart.length === 0 ? (
                    <p className="text-white text-center">Your cart is empty.</p>
                ) : (
                    <div className="space-y-4">
                        {cart.map(item => (
                            <div key={item.id} className="flex flex-wrap items-center justify-between bg-gray-800 rounded-lg p-4">
                                <img src={item.img} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
                                <div className="flex-1 ml-4">
                                    <p className="text-white font-semibold">{item.title}</p>
                                    <p className="text-gray-400">Quantity: {item.amount}</p>
                                </div>
                                <p className="text-white font-semibold">${item.price}</p>
                                <div className='w-[50%] text-center m-auto mt-3 text-white font-semibold'>
                                   Total :  ${calculateTotalPrice(item)}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
export default Sidebar;

