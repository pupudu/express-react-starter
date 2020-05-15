import React from 'react';
import { Button, Card, CardContent, MenuItem } from '@material-ui/core';
import { Grid, Box, Heading, Stack } from '@chakra-ui/core';
import { useFetch } from 'core/fetch';
import { Routes, Route } from 'react-router-dom';
import { Form, FormDate, FormInput, FormSelect } from 'core/signup';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import cover from './backk.jpg';
import card from './card.jpg';
import AcUnitSharpIcon from '@material-ui/icons/AcUnitSharp';
import InputIcon from '@material-ui/icons/Input';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import avatar1 from './avatar1.png';
import avatar2 from './avatar2.png';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.webp';
import CallIcon from '@material-ui/icons/Call';
import back from './back.jpg';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
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
  button: {
    margin: theme.spacing(1),
    marginRight: '100px',
    marginLeft: '10%',
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
}));
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#5f4f90',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 30,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(level, standard, advanced, additional) {
  return { level, standard, advanced, additional };
}

const rows = [
  createData('Price per word*', 'From $0.06', 'From $0.', 'Contact sales'),
  createData(
    'Quality',
    'Translator who passed our Standard level test. Best for casual content.',
    'Translator who passed our more rigorous, Advanced level test. Best for content requiring more accuracy.',
    'Proofreading by business level translator. Only available for customers with sales support.',
  ),
  createData(
    'Recommended use',
    'Internal communication Social media posts User reviews Emails and letters',
    'Presentations Reports Mobile apps Website localization',
    'Documents translated using DocMora business level.',
  ),
];
const Pricing = () => {
  const classes = useStyles();
  return (
    <div>
      <Heading isTruncated fontSize="80px" className={classes.priceheading}>
        Pricing and Languages
      </Heading>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center" className={classes.tablehead}>
                Level
              </StyledTableCell>
              <StyledTableCell align="center" className={classes.tablehead}>
                Standard
              </StyledTableCell>
              <StyledTableCell align="center" className={classes.tablehead}>
                Advanced
              </StyledTableCell>
              <StyledTableCell align="center" className={classes.tablehead}>
                Additional Services
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.level}>
                <StyledTableCell component="th" scope="row">
                  {row.level}
                </StyledTableCell>
                <StyledTableCell align="center">{row.standard}</StyledTableCell>
                <StyledTableCell align="center">{row.advanced}</StyledTableCell>
                <StyledTableCell align="center">{row.additional}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const Login = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Card>
      <CardContent>
        <Stack spacing={3} textAlign="center" mb="30px" mt="30px" as="h1">
          <Heading isTruncated fontSize="100px" fontFamily="Perpetua">
            Log In
          </Heading>
          <Heading isTruncated fontSize="20px" fontFamily="Perpetua">
            Already have a DocMora account? Log In
          </Heading>
        </Stack>
        <Form
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(data) => {
            console.log('Login Successful');
            alert(JSON.stringify(data, null, 2));
          }}
        >
          <Grid templateColumns="repeat(1, 1fr)" gap={6} mb="1rem" mb="1rem" ml="25%" mr="25%">
            <FormInput name="email" label="Email" type="email" />
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
          </Grid>
          <Grid justifyContent="center">
            <Button size="large" color="secondary" variant="contained" type="submit">
              Log In
            </Button>
          </Grid>
        </Form>
      </CardContent>
    </Card>
  );
};

const SignUp = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Card>
      <CardContent>
        <Stack spacing={3} textAlign="center" mb="30px" mt="30px" as="h1">
          <Heading isTruncated fontSize="100px" fontFamily="Perpetua">
            Sign Up
          </Heading>
          <Heading isTruncated fontSize="20px" fontFamily="Perpetua">
            Already have a DocMora account? Log In
          </Heading>
        </Stack>
        <Form
          initialValues={{
            name: '',
            email: '',
            emailAgain: '',
            methods: '',
            date: Date.now(),
          }}
          onSubmit={(data) => {
            console.log('Form submitted');
            alert(JSON.stringify(data, null, 2));
          }}
        >
          <Grid templateColumns="repeat(1, 1fr)" gap={6} mb="1rem" ml="25%" mr="25%">
            <FormInput name="name" label="Name" />
            <FormDate name="date" label="Birthday" />
            <FormSelect name="gender" label="Gender">
              <MenuItem value="">
                <em>Other</em>
              </MenuItem>
              <MenuItem>Male</MenuItem>
              <MenuItem>Female</MenuItem>
            </FormSelect>
            <FormInput name="email" label="Email" type="email" />
            <FormInput name="emailAgain" label="Type your email again" type="email" />
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
          </Grid>
          <Grid justifyContent="center">
            <Button size="large" color="secondary" variant="contained" type="submit">
              Sign Up
            </Button>
          </Grid>
        </Form>
      </CardContent>
    </Card>
  );
};

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.background}>
        <img src={cover} alt="cover" className={classes.back} />
        <Heading isTruncated fontSize="80px" className={classes.heading}>
          Welcome to DocMora Translator
        </Heading>
        <Typography gutterBottom className={classes.para}>
          <AcUnitSharpIcon />
          &nbsp; 100% customer satisfaction
          <br />
          <AcUnitSharpIcon />
          &nbsp; Document Format Preservation
        </Typography>
      </div>
      <card>
        <img src={card} alt="card" className={classes.card} />
        <div className={classes.cardcontent}>
          <div className={classes.avatar}>
            <AvatarGroup max={4}>
              <Avatar alt="Remy Sharp" src={avatar1} className={classes.large} />
              <Avatar alt="Travis Howard" src={avatar2} className={classes.large} />
              <Avatar alt="Cindy Baker" src={avatar3} className={classes.large} />
              <Avatar alt="Agnes Walker" src={avatar4} className={classes.large} />
            </AvatarGroup>
          </div>
          <CardContent>
            <Typography className={classes.cardtypo1}>Upload Your file :&nbsp;</Typography>
            <Typography className={classes.cardtypo2}>
              our translators start most orders within&nbsp;
            </Typography>
            <Typography className={classes.cardtypo1}>01 hour!</Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<InputIcon />}
              size="large"
            >
              ORDER NOW
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<CallIcon />}
              size="large"
            >
              CONTACT SALES
            </Button>
          </CardActions>
        </div>
      </card>
      <Card className={classes.card2}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5" className={classes.card2head}>
              High-quality translation solutions
              <br />
            </Typography>
            <Typography variant="h6" color="textSecondary">
              Our intuitive platform allows companies of any size to order
            </Typography>
            <Typography variant="h6" color="textSecondary">
              cost-efficient translations from professional translators.
            </Typography>
          </CardContent>
        </div>
        <CardMedia className={classes.cover} image={back} title="Live from space album cover" />
      </Card>
    </div>
  );
};

const DataView = () => {
  const data = useFetch({ url: '/example/all' });
  return <div>{data}</div>;
};

function App() {
  return (
    <div>
      <Box mt="1rem">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/data" element={<DataView />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Box>
    </div>
  );
}
export default App;
