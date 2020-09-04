import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { useStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import upload from '../images/upload.png';
import InputIcon from '@material-ui/icons/Input';
import { fetch, useFetch } from '../core/fetch';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import { Payment } from './Payment';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import PublishIcon from '@material-ui/icons/Publish';
// import getPageCount from 'docx-pdf-pagecount';

export const OrderNow = () => {
  const classes = useStyles();
  const userOrderInformation = useFetch({ url: '/api/orderDetails/get-order-information' });
  const userInformation = useFetch({ url: '/api/user/get-user-information' });
  //Language Selection Section
  const [value, setValue] = React.useState('');
  //value  = Source language
  const radioHandleChange = (event) => {
    setValue(event.target.value);
  };
  const [state, setState] = React.useState({
    english: false,
    tamil: false,
    sinhala: false,
  });
  // state = list of target languages
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { english, tamil, sinhala } = state;

  const userTranslationInformation = useFetch({
    url: '/api/orderDetails/get-translation-information',
  });

  // Price Section
  const currentOrder = userOrderInformation.filter((order) => order.order_status === 'payable')[0];

  const currentOrderTranslations = userTranslationInformation.filter(
    (translation) => translation.order_number === currentOrder.id,
  );
  const rows = currentOrderTranslations.map((translation) => {
    return {
      translateTo: translation.language,
      pageCount: translation.page_count,
      price: translation.price,
    };
  });
  //get file extension
  function getExtension(filename) {
    const i = filename.lastIndexOf('.');
    return i < 0 ? '' : filename.substr(i);
  }
  // Uploading File Section
  const [file, setFile] = useState('');
  const [pageCount, setPageCount] = useState(0);
  const [alert, setAlert] = useState(false);
  const [filename, setFilename] = useState('Choose File');
  const [message, setMessage] = useState('');

  const handleClose = () => {
    setAlert(false);
  };

  function onChangeHandler(event) {
    setFile(event.target.files[0]);
    setFilename(event.target.files[0].name);
  }

  function onClickHandler() {
    const formData = new FormData();
    formData.append('file', file);
    fetch({
      url: '/api/user/upload',
      method: 'post',
      body: formData,
    }).then((res) => {
      const { filePath } = res;
      // setPageCount(
      //   getPageCount(filePath)
      //     .then((pages) => {
      //       return pages;
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     }),
      // );
      if (res.status === 'success') {
        setAlert(true);
        setMessage(`File Uploaded: ${filename}`);
      } else {
        setMessage('There was a problem with uploading. Try Again!');
      }
    });
  }
  const data = {
    clientId: userInformation.id,
    fileName: filename,
    fileType: getExtension(filename),
    orderDate: Date.now(),
    sourceLanguage: value,
    pageCount: pageCount,
    totalPrice: 100,
    orderStatus: 'payable',
  };
  function onSubmitHandler() {
    fetch({
      url: '/api/orderDetails/save-order-information',
      method: 'post',
      body: data,
    }).then((res) => {
      if (res.status === 'success') {
        console.log(res);
      }
    });
  }
  return (
    <div className={classes.homePageMainContainer}>
      <Grid container className={classes.orderBackgroundImage}>
        <Paper elevation={10} className={classes.paper}>
          <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
            What would you like to translate ?
          </Typography>
          <Paper elevation={3} className={classes.uploadFilePaper}>
            <label htmlFor="upload-file">
              <img src={upload} alt="upload image" className={classes.uploadImage} />
            </label>
            <input
              accept=".pdf,.docx"
              id="upload-file"
              type="file"
              onChange={onChangeHandler}
              className={classes.chooseFileButton}
            />
          </Paper>

          <Snackbar open={alert} autoHideDuration={2000} onClose={handleClose}>
            <Alert severity="success" variant="filled">
              {message}
            </Alert>
          </Snackbar>

          <Fab
            color="secondary"
            component="span"
            variant="contained"
            size="large"
            className={classes.uploadButton}
            onClick={onClickHandler}
          >
            <InputIcon /> Upload File
          </Fab>
        </Paper>
      </Grid>
      <div className={classes.pricingAndLanguageSection}>
        <Grid container component="main" className={classes.root}>
          <Grid item md={6} className={classes.languageSelectContainer}>
            <Typography variant="h3" gutterBottom className={classes.secondaryHeading}>
              Language Selection
            </Typography>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel gutterBottom className={classes.secondaryParagraph}>
                Select the source Language
              </FormLabel>
              <RadioGroup
                aria-label="source-language"
                name="source-language"
                value={value}
                onChange={radioHandleChange}
              >
                <FormControlLabel value="english" control={<Radio />} label="English" />
                <FormControlLabel value="tamil" control={<Radio />} label="Tamil" />
                <FormControlLabel value="sinhala" control={<Radio />} label="Sinhala" />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel variant="h5" gutterBottom className={classes.secondaryParagraph}>
                Select the target Language/s
              </FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={english} onChange={handleChange} name="english" />}
                  label="Englsih"
                />
                <FormControlLabel
                  control={<Checkbox checked={tamil} onChange={handleChange} name="tamil" />}
                  label="Tamil"
                />
                <FormControlLabel
                  control={<Checkbox checked={sinhala} onChange={handleChange} name="sinhala" />}
                  label="Sinhala"
                />
              </FormGroup>
            </FormControl>
            <Fab
              color="secondary"
              variant="contained"
              size="large"
              className={classes.orderDetailsSubmitButton}
              onClick={onSubmitHandler}
            >
              <PublishIcon /> Confirm Details
            </Fab>
          </Grid>
          <Grid item md={6} component={Paper} elevation={6} square>
            <div className={classes.paperContainer}>
              <Typography variant="h3" gutterBottom className={classes.secondaryHeading}>
                Payment Section
              </Typography>
              <TableContainer component={Paper} className={classes.pricingTable}>
                <Table aria-label="spanning table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="right">Language</TableCell>
                      <TableCell align="right">Page Count</TableCell>
                      <TableCell align="right">Price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.desc}>
                        <TableCell align="right">{row.translateTo}</TableCell>
                        <TableCell align="right">{row.pageCount}</TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell rowSpan={3} />
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={1}>Total</TableCell>
                      <TableCell align="right">{currentOrder.total_price}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Payment price={currentOrder.total_price} />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
