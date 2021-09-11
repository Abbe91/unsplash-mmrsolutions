import React, { useState } from 'react'
import Gallery from './components/gallery'
import SearchBox from './components/searchBox'

const App = () => {
  const [input, setInput] = useState('')
  return (
    <center>
      <h1>search your photo</h1>
      <SearchBox input={input} setInput={setInput} />
      <Gallery query={input} />
    </center>
  )
}
export default App
