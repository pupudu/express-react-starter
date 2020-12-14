import { useStyles } from './styles';
import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import InputIcon from '@material-ui/icons/Input';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { fetch } from '../core/fetch';

export const UploadFileButton = () => {
  const classes = useStyles();
  const [file, setFile] = useState('');

  const [pageCount, setPageCount] = useState(10);
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
  return (
    <div>
      <input
        accept=".pdf,.docx"
        id="upload-file"
        type="file"
        onChange={onChangeHandler}
      />
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
    </div>
  );
}
