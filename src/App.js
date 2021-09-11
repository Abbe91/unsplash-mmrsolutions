import React, { useState } from 'react'
import Gallery from './components/gallery'
import NavBar from './components/navBar/index'
import Hero from './components/hero/index'

const App = () => {
  const [input, setInput] = useState('')
  return (
    <div>
      <NavBar input={input} setInput={setInput} />
      <Hero input={input} setInput={setInput} />
      <Gallery query={input} />
    </div>
  )
}
export default App
