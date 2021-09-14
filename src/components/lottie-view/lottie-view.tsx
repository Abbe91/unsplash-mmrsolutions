import React, { useState } from 'react';
import useStyles from './styles';
import Lottie from 'lottie-react-web';
import { Grid } from '@material-ui/core';

type LottieProps = {
  lottieAnimation?: any;
};

const LottieView = (props: LottieProps) => {

  const classes = useStyles();
  const [isLooping, setIsLooping] = useState(false)

  const defaultOptions = {
    loop: isLooping,
    autoplay: true,
    animationData: props.lottieAnimation,
  };

  return (
    <Grid className={classes.container} onMouseEnter={() => setIsLooping(true)} onMouseLeave={() => setIsLooping(false)}>
      <Lottie
        options={
          defaultOptions
        }
      />
    </Grid>
  )

}
export default LottieView;