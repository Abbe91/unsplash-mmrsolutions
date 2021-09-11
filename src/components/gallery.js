import React, { useEffect, useState } from 'react'
import Image from './image'
import { getImage, getSearchImages } from '../api/api'

const Gallery = ({ query }) => {
  const [imagList, setImageList] = useState([])
  useEffect(() => {
    getImage().then((data) => {
      setImageList(data)
    })
  }, [])
  useEffect(async () => {
    const data = await getSearchImages(query)
    setImageList(data)
    // console.log(data)
  }, [query])
  return (
    <div>
      {imagList.map((img) => {
        return <Image src={img.urls.small} key={img.id} />
      })}
    </div>
  )
}
export default Gallery
