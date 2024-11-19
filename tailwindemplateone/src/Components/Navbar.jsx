import React from 'react'
import { FaBars } from "react-icons/fa";
export default function Navbar() {
  return(
    <div>
      <nav class="w-[100%] p-2 md:p-5">
        <div class="container mx-auto  p-2 md:p-4  flex justify-between items-center">
          <div class="container w-auto flex justify-between items-center">
            <div class="flex justify-center items-center">
              <div class="h-9 w-9 p-1 rounded-full bg-sky-600 flex justify-center items-end">
                <div class="h-5 w-5 rounded-md bg-white"></div>
              </div>
              <h1 class="font-semibold text-black text-2xl ml-2">Tax</h1>
              <h1 class="text-sky-600 text-2xl font-bold">Pal</h1>
            </div>
            <div class="hidden md:flex justify-evenly items-center space-x-10 ml-6">
              <a href="#" class="text-black">Home</a>
              <a href="#" class="text-black">About</a>
              <a href="#" class="text-black">Services</a>
            </div>
          </div>

          <div class="flex justify-between items-center w-auto">
            <h1 class="hidden md:flex text-black">Sign in</h1>
            <button class="w-auto p-1 md:p-3 ml-3 text-white font-semibold md:font-bold  rounded-3xl bg-sky-600">Get started today</button>
            <div class="flex md:hidden ml-3">
            <FaBars size={20} color='black'/>
            </div>
          </div>
        </div>
      </nav>
    </div>

  )
}
