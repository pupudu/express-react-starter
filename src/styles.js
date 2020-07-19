import { makeStyles } from '@material-ui/core/styles';
import mainImage from 'images/main.jpg';
import loginImage from 'images/log.jpg';
import signUpImage from 'images/signup.jpg';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },

  // home section
  paperContainer: {
    padding: '150px 5% 0',
    alignItems: 'center',
  },
  homeHeading: {
    fontFamily: 'Galada',
    textAlign: 'center',
  },
  homeParagraph: {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  homeContentIcon: {
    margin: '10px',
  },
  mainImage: {
    backgroundImage: `url(${mainImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  buttonRow: {
    textAlign: 'center',
  },
  button: {
    margin: '5%',
  },
  //login section
  avatar: {
    backgroundColor: '#DC004E',
    margin: '10px auto',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  loginImage: {
    backgroundImage: `url(${loginImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  loginPaperContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '100px 10% 0',
    alignItems: 'center',
  },

  // signup Section

  signUpImage: {
    backgroundImage: `url(${signUpImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  // ready
  cardContent: {
    textAlign: 'center',
    marginTop: '50px',
    height: '800px',
  },
  headerContent: {
    fontSize: '25px',
    fontFamily: 'Times New Roman',
  },

  formContent: {
    width: '40vw',
    marginBottom: '15px',
  },
  cardMedia: {
    marginTop: '50px',
    height: '800px',
  },
  background: {
    display: 'inline-block',
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  back: {
    pointerEvents: 'none',
    position: 'absolute',
    marginTop: 50,
    width: ' 100%',
    height: '100%',
    zIndex: '-1',
  },
  card: {
    pointerEvents: 'none',
    position: 'absolute',
    marginLeft: '12%',
    marginTop: 10,
    height: 250,
    width: ' 65%',
    zIndex: '-1',
  },
  cardcontent: {
    marginLeft: '30%',
    marginTop: 10,
    marginBottom: 100,
    height: 200,
    width: ' 75%',
    zIndex: '-1',
  },
  cardtypo1: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'white',
    display: 'inline-block',
  },
  cardtypo2: {
    fontSize: '20px',
    color: 'white',
    display: 'inline-block',
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },

  loginButton: {
    margin: theme.spacing(1),
    fontSize: '20px',
  },
  container: {},
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(1),
  },
  textField: {
    width: '100ch',
  },

  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    paddingTop: '500px',
  },
  cover: {
    width: '50%',
  },
  card2: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '100px',
    height: '200px',
  },
  card2head: {
    marginBottom: '30px',
    marginTop: '20px',
    marginLeft: '20%',
    fontWeight: 'bold',
  },
  card2body: {
    fontWeight: 'bold',
  },
  priceheading: {
    marginTop: 50,
    marginBottom: 50,
    textAlign: 'center',
    fontFamily: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif',
  },
  table: {
    minWidth: 500,
  },
  tablehead: {
    fontSize: '30px',
  },
  tablespecial: {
    fontSize: 'medium',
  },
}));
