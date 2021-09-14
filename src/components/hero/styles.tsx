import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  hero: {
      minHeight: '50vh',
    background: `url(${process.env.PUBLIC_URL + '../../../assets/hero.jpg'})`,
    width: '100%',
  },
  media: {
    height: 10,
    paddingTop: '56.25%', // 16:9
  },
  heroContainer: {
      maxWidth: '60%',
      backgroundImage: `url("/assets/hero.jpg"})`,
      margin: 'auto',
  },
  heroContent: {
      height: '600px',
      display: 'flex',
      backgroundImage: `url("/assets/hero.jpg"})`,
      flexDirection: 'column',
      justifyContent: 'center',
  }
}));