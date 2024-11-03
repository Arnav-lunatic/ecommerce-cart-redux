import { useState } from 'react'
import Shop from './components/Shop'
import Cart from './components/Cart'

function App() {

  return (
    <div className="my-20 mr-20">
      <h1 className='fixed bg-zinc-600 p-2 top-0 right-0 left-0 text-center text-4xl font-bold z-20'>E-Commerce Cart</h1>
      <Shop />
      <Cart/>
    </div>
  )
}

export default App
