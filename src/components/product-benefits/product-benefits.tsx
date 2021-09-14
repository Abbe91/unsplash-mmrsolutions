import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
} from '@material-ui/core';
import useStyles from './styles';
import LottieView from '../../components/lottie-view';
import SpinningPen from '../../assets/lottie-animations/spinning-pen.json'
import shooting from '../../assets/lottie-animations/shooting-photo.json'
import MorningCofee from '../../assets/lottie-animations/morning-cofee.json'

type ProductBenefitsProps = {};
const ProductBenefits: React.SFC<ProductBenefitsProps> = () => {
  const classes = useStyles();

  return (
    <Box className={classes.hero} width={'100%'} py={8}>
      <Typography className={classes.pThick} align="center" variant="h4">Search for every photo you want <br></br></Typography>
      <Box className={classes.cardBox}>
        <Card className={classes.card} variant='outlined'>
          <CardContent>
            <LottieView lottieAnimation={SpinningPen} />
            <Typography className={classes.pThick} >
              1. you can open the photo</Typography>
            <Typography className={classes.text} >
              Free photo online just for you
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card} variant='outlined'>
          <CardContent>
            <LottieView lottieAnimation={MorningCofee} />
            <Typography className={classes.pThick}>
              2. Type any thing you want </Typography>
            <Typography className={classes.text}>
              mor than 30 pictures you will see every time
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card} variant='outlined'>
          <CardContent>
            <LottieView lottieAnimation={shooting} />
            <Typography className={classes.pThick}>
              3. you can chose which theme you like </Typography>
            <Typography className={classes.text}>
              youi have the White theme and the black one
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}

export default ProductBenefits;