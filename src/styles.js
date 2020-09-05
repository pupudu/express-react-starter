import { makeStyles } from '@material-ui/core/styles';
import mainImage from 'images/main.jpg';
import loginImage from 'images/log.jpg';
import signUpImage from 'images/signup.jpg';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  formContent: {
    width: '40vw',
    marginBottom: '15px',
  },

  // home section
  paperContainer: {
    padding: '150px 5% 0',
    alignItems: 'center',
  },
  homeHeading: {
    fontSize: '80px',
    textAlign: 'center',
    fontWeight: 'bold',
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
  //Sign In section
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
    margin: ' 0 0 50px',
  },

  // Sign Up Section

  signUpImage: {
    backgroundImage: `url(${signUpImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));
