import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  hero: {
    
  },
  card: {
    height: 420,
    width: 300,
    marginTop: '8rem',
    display: 'flex',
    margin: '2rem',
    justifyContent: 'center',
    textAlign: 'center',
    boxShadow: '1px 1px 10px 10px rgb(211,211,211) ',
  },
  cardBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  pThick: {
    align:'center',
    fontWeight: "bold",
  },
  text:{
    variant: 'body2',
    color: '#808080'
  }
 
}));