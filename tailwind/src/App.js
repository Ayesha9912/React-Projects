import React from 'react'

export default function App() {
  return(
    <div>
      <div class="min-h-screen flex flex-col">
        <nav class="bg-blue-500 p-4">
          <div class="container mx-auto flex justify-between items-center">
            <div class="text-white text-2xl font-bold">
              Logo
            </div>
            <div class="hidden md:flex space-x-20">
              <a href="#" class="text-white">Home</a>
              <a href="#" class="text-white">About</a>
              <a href="#" class="text-white">Services</a>
              <a href="#" class="text-white">Contact</a>
            </div>
            <div class="md:hidden flex items-center">
              <button id="menu-button" class="text-white focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
          <div id="mobile-menu" class="md:hidden hidden">
            <a href="#" class="block text-white py-2">Home</a>
            <a href="#" class="block text-white py-2">About</a>
            <a href="#" class="block text-white py-2">Services</a>
            <a href="#" class="block text-white py-2">Contact</a>
          </div>
        </nav>
        <main class="flex-grow p-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-gray-200 p-4">Column 1</div>
            <div class="bg-gray-300 p-4">Column 2</div>
            <div class="bg-gray-400 p-4">Column 3</div>
            <div class="bg-gray-500 p-4">Column 4</div>
          </div>
        </main>
        <main class="flex-grow p-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-gray-500 p-4 text-black">Columns1</div>
            <div class="bg-gray-500 p-4 text-black">Columns2</div>
            <div class="bg-gray-500 p-4 text-black">Columns4</div>
            <div class="bg-gray-500 p-4 text-black">Columns4</div>
          </div>
        </main>
        <footer class="bg-blue-500 text-white p-4">
          <p class="text-4xl text-center">Footer</p>
        </footer>
      </div>
    </div>
  )
}
