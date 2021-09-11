// import React, { useEffect, useState } from 'react'
// import Image from './image'
// import { getImage, getSearchImages } from '../api/api'

// const Gallery = ({ query }) => {
//   const [imagList, setImageList] = useState([])
//   useEffect(() => {
//     getImage().then((data) => {
//       setImageList(data)
//     })
//   }, [])
//   useEffect(async () => {
//     const data = await getSearchImages(query)
//     setImageList(data)
//     // console.log(data)
//   }, [query])
//   return (
//     <div>
//       {imagList.map((img) => {
//         return <Image src={img.urls.small} key={img.id} />
//       })}
//     </div>
//   )
// }
// export default Gallery
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import Image from './image'

import { getSearchImages, getImage } from '../api/api'
import Masonry from 'react-masonry-component'

const modalStyle = {
  content: {
    border: 'none',
    padding: 'none',
    overflow: 'none',
    // background: "none",
  },
}
const Gallery = ({ query }) => {
  const [imgList, setImgList] = useState([])
  const [currentImg, setCurrentImg] = useState(null)

  useEffect(() => {
    getImage().then((data) => {
      //   console.log(data);
      setImgList(data)
    })
  }, [])

  useEffect(async () => {
    if (query.trim() === '') {
      return
    }
    const data = await getSearchImages(query)
    setImgList(data)
    // console.log(data);
  }, [query])

  Modal.setAppElement('#app')
  return (
    <div>
      <Modal
        contentLabel="Image preview"
        style={modalStyle}
        isOpen={!!currentImg}
        onRequestClose={() => setCurrentImg(null)}
      >
        <img className="img-preview" src={currentImg} alt="image preview" />
      </Modal>

      {imgList.length === 0 ? <h2>No images found</h2> : null}
      <Masonry className="grid-container" options={{ isFitWidth: true }}>
        {imgList.map((img) => {
          return (
            <Image urls={img.urls} handleClick={setCurrentImg} key={img.id} />
          )
        })}
      </Masonry>
    </div>
  )
}

export default Gallery
