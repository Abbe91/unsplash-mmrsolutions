import React, { useState } from 'react'
import Gallery from './components/gallery'
import NavBar from './components/navBar/index'
import { ProductBenefits } from './components/product-benefits/index'
//import Hero from './components/hero/index'

const App = () => {
  const [input, setInput] = useState('')
  return (
    <div>
      <NavBar input={input} setInput={setInput} />
      <ProductBenefits />
      <Gallery query={input} />
    </div>
  )
}
export default App
