// @ts-nocheck

import React from 'react'

const Image = ({ urls, handleClick }) => {
  return (
    <li className="img" onClick={() => handleClick(urls.regular)}>
      <img src={urls.small} alt="Picsum photo" width="250" />
    </li>
  )
}
export default Image
// import React from 'react'
// import Skeleton from '@material-ui/lab/Skeleton'
// import { makeStyles } from '@material-ui/core/styles'

// const useStyles = makeStyles({
//   root: {
//     width: 300,
//   },
// })

// const Image = ({ src }) => {
//   const classes = useStyles()
//   return (
//     <div className={classes.root}>
//       <img src={src} className="image" />
//     </div>
//   )
// }
// export default Image
