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
    textAlign: 'Left',
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
    height: '50px',
  },

  // OrderNow
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50vw',
    padding: '20px 5vw 10vh',
  },
  orderHeading: {
    fontFamily: 'Anton',
    textAlign: 'center',
  },
  orderBackgroundImage: {
    display: 'flex',
    flexDirection: 'column',
    padding: '100px 5% 150px',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${orderImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  pricingAndLanguageSection: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(8),
    width: '100%',
    paddingRight: '10px',
    paddingBottom: theme.spacing(3),
  },
  uploadImage: {
    width: '10vw',
    margin: '20px',
  },
  uploadFilePaper: {
    display: 'flex',
    flexDirection: 'column',
    padding: '5%',
    alignItems: 'center',
    marginBottom: '20px',
  },
  statusContainer: {
    padding: '50px 5%',
    width: '100%',
  },
  paperStatus: {
    display: 'flex',
    flexDirection: 'column',
    padding: ' 0 10% 5%',
    alignItems: 'center',
  },
  uploadButton: {
    padding: '10px 20px',
    marginTop: '5px',
  },
  orderDetailsSubmitButton: {
    margin: '30px',
  },
  stripeButton: {
    margin: '30px',
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
    marginTop: '50px',
    width: '100%',
  },
  languageIcon: {
    width: '20px',
    marginRight: '10px',
  },
  pricingTable: {
    margin: '50px 0',
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
  // My Orders Page
  myOrdersMainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '100px 50px 50px',
  },
  languageSelectContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '150px 5% 0',
    justifyContent: 'flex-start',
  },
  chooseFileButton: {
    marginLeft: '70%',
  },

  // All Jobs
  allJobsMainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '100px 50px 50px',
  },
  tabsContainer: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  //Order Page
  orderPagePaper: {
    padding: '5%',
    height: '100vh',
    width: '100%',
  },
  orderMainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '100px 50px 50px',
  },

  //Language Container
  languageContainer: {
    padding: '5% 10%',
    width: '100%',
    margin: '50px 0',
  },
  orderPaperContainer: {
    padding: '150px 5%',
    width: '100%',
  },
  fileName: {
    textAlign: 'center',
  },
  horizontalLine: {
    width: '80%',
    border: '1px solid white',
    marginBottom: '20px',
    color: 'black',
  },
  containerDescription: {
    textAlign: 'left',
  },
}));
