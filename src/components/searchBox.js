import React, { useState } from 'react'

const SearchBox = ({ input, setInput }) => {
  return (
    <input
      type="text"
      name="photo Search"
      placeholder="search"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  )
}

export default SearchBox
