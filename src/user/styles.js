import { makeStyles } from '@material-ui/core/styles';
import user1 from '../images/user1.jpg';
import orderImage from '../images/orderImage.jpg';
import csImage from '../images/csImage.jpg';
import user2 from '../images/user2.jpg';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },

  // home section
  homePageMainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: theme.spacing(3),
  },
  exploreSection: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(8),
    width: '90%',
    paddingBottom: theme.spacing(3),
  },

  paperContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '150px 5% 0',
    alignItems: 'center',
  },
  secondaryHeading: {
    textAlign: 'left',
  },
  mainHeading: {
    textShadow: '2px 2px 4px #000000',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mainParagraph: {
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  secondaryParagraph: {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  homeContentIcon: {
    margin: '10px',
  },
  mainImage: {
    display: 'flex',
    flexDirection: 'column',
    padding: '150px 5% 0',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${user1})`,
    backgroundSize: 'stretched',
    backgroundPosition: 'center',
  },
  secondaryImage: {
    backgroundImage: `url(${user2})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  button: {
    margin: '20px',
  },

  // OrderNow
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50vw',
    height: '70vh',
    padding: '10vh 5vw',
  },
  orderHeading: {
    fontFamily: 'Anton',
    textAlign: 'center',
  },
  orderBackgroundImage: {
    display: 'flex',
    flexDirection: 'column',
    padding: '150px 5% 150px',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${orderImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  uploadImage: {
    width: '10vw',
    margin: '20px',
  },
  statusContainer: {
    padding: '150px 5%',
    height: '100vh',
  },
  paperStatus: {
    display: 'flex',
    flexDirection: 'column',
    padding: '5%',
    alignItems: 'center',
  },
  //Pricing
  pricePageMainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: theme.spacing(3),
  },
  languageSection: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    width: '80%',
    paddingBottom: theme.spacing(3),
  },

  pricingSection: {
    display: 'flex',
    flexDirection: 'column',
    padding: '100px 5%',
    alignItems: 'center',
    width: '80%',
    height: '100vh',
  },
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(2, 0, 5),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  cardLanguage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardLanguageDescription: {
    marginTop: '10px',
  },
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
  },
  languageIcon: {
    width: '20px',
    marginRight: '10px',
  },
  //customer  support
  csBackgroundImage: {
    display: 'flex',
    flexDirection: 'column',
    padding: '150px 5% 150px',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${csImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  requestText: {
    margin: '20px 0',
    width: '70%',
  },
  submitButton: {
    marginRight: '10px',
  },
  // Me
  background: {
    display: 'inline-block',
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
  },
  back: {
    pointerEvents: 'none',
    position: 'absolute',
    width: ' 100%',
    height: '100%',
    zIndex: '-1',
  },
  card: {
    pointerEvents: 'none',
    position: 'absolute',
    marginLeft: '12%',
    marginTop: 50,
    height: 250,
    width: ' 65%',
    zIndex: '-1',
  },
  avatar: {
    marginLeft: '20%',
  },
  cardcontent: {
    marginLeft: '30%',
    marginTop: 75,
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
    width: theme.spacing(7),
    height: theme.spacing(7),
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
  heading: {
    marginTop: 200,
    marginBottom: 50,
    color: 'white',
    textAlign: 'center',
    textShadow: '4px 4px 3px black',
    fontFamily: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif',
  },
  para: {
    textAlign: 'center',
    fontSize: 25,
    textTransform: 'uppercase',
    marginBottom: 200,
    color: 'white',
    textShadow: '2px 2px 3px black',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
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

//fonts
//<link href="https://fonts.googleapis.com/css2?family=Anton&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
