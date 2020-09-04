import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { useStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import InputIcon from '@material-ui/icons/Input';
import { Button } from '@material-ui/core';
import { fetch } from '../core/fetch';

export default function LanguageContainer(props) {
  const classes = useStyles();
  const components = {
    client: {
      placed: {
        label: "Your translation haven't picked up by a translator yet!",
        child: (
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.button}
            startIcon={<InputIcon />}
            onClick={() => {
              fetch({
                url: '/api/user/upload',
                method: 'post',
                body: 'Disabled',
              });
            }}
          >
            Cancel
          </Button>
        ),
      },
      pending: {
        label: 'Your translation has started!',
        child: <div></div>,
      },
      translated: {
        label: 'Your translation has started!',
        child: <div></div>,
      },
      revised: {
        label: 'Your translation has started!',
        child: <div></div>,
      },
      approved: {
        label: 'Your translation has started!',
        child: <div></div>,
      },
      reviewable: {
        label: 'Your translation has completed!',
        child: (
          <div>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              className={classes.button}
              startIcon={<InputIcon />}
              onClick={() => {
                fetch({
                  url: '/api/user/upload',
                  method: 'post',
                  body: 'revised',
                });
              }}
            >
              Revise
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              className={classes.button}
              startIcon={<InputIcon />}
              onClick={() => {
                fetch({
                  url: '/api/user/upload',
                  method: 'post',
                  body: 'approved',
                });
              }}
            >
              Approve
            </Button>
          </div>
        ),
      },
      clientApproved: {
        label: 'Your translation has finished.Thank you!',
        child: <div></div>,
      },
      clientRevised: {
        label: 'You have asked for a revision. Wait for them to resubmit the translation!',
        child: <div></div>,
      },
    },
    translator: {
      placed: {
        label: 'Ready? Start your job now!',
        child: (
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.button}
            startIcon={<InputIcon />}
            onClick={() => {
              fetch({
                url: '/api/user/upload',
                method: 'post',
                body: 'pending',
              });
            }}
          >
            Accept
          </Button>
        ),
      },
      pending: {
        label: 'Upload your translated file here!',
        child: <div>Submit button and a upload button</div>,
      },
      translated: {
        label:
          'Translation has not been approved by the client yet. Wait for them to accept your translation!',
        child: <div></div>,
      },
      revised: {
        label: 'You have been asked for a revision',
        child: <div>Submit button and a upload button</div>,
      },
      approved: {
        label:
          'Translation has not been approved by the client yet. Wait for them to accept your translation!',
        child: <div></div>,
      },
      reviewable: {
        label:
          'Translation has not been approved by the client yet. Wait for them to accept your translation!',
        child: <div></div>,
      },
      clientApproved: {
        label: 'Your translation has been approved by the client.Thank you!',
        child: <div></div>,
      },
      clientRevised: {
        label:
          'Translation has not been approved by the client yet. Wait for them to accept your translation!',
        child: <div></div>,
      },
    },
    itspecialist: {
      placed: {
        label: "Translation haven't picked up by a translator yet!",
        child: <div></div>,
      },
      pending: {
        label: 'Translation has started!',
        child: <div></div>,
      },
      translated: {
        label: 'Translation has completed!',
        child: (
          <div>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              className={classes.button}
              startIcon={<InputIcon />}
              onClick={() => {
                fetch({
                  url: '/api/user/upload',
                  method: 'post',
                  body: 'revised',
                });
              }}
            >
              Revise
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              className={classes.button}
              startIcon={<InputIcon />}
              onClick={() => {
                fetch({
                  url: '/api/user/upload',
                  method: 'post',
                  body: 'approved',
                });
              }}
            >
              Approve + Upload button with submit
            </Button>
          </div>
        ),
      },
      revised: {
        label: 'You have asked for a revision! Wait for the translator to to finish the job!  ',
        child: <div></div>,
      },
      approved: {
        label: 'You have approved the translation. Wait for the client to accept the translation!',
        child: <div></div>,
      },
      reviewable: {
        label:
          'Translation has not been approved by the client yet. Wait for them to accept the translation!',
        child: <div></div>,
      },
      clientApproved: {
        label: 'Translation has been accepted by the client. Thank you!',
        child: <div></div>,
      },
      clientRevised: {
        label:
          'Client has asked for a revision. Resubmit the translation or asked the translator to translate it again!',
        child: (
          <div>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              className={classes.button}
              startIcon={<InputIcon />}
              onClick={() => {
                fetch({
                  url: '/api/user/upload',
                  method: 'post',
                  body: 'revised',
                });
              }}
            >
              Revise
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              className={classes.button}
              startIcon={<InputIcon />}
              onClick={() => {
                fetch({
                  url: '/api/user/upload',
                  method: 'post',
                  body: 'approved',
                });
              }}
            >
              Resubmit - upload button
            </Button>
          </div>
        ),
      },
    },
  };
  const type = props.type;
  const orderStatus = props.orderStatus;

  return (
    <Paper className={classes.languageContainer} elevation={3}>
      <Grid container>
        <Grid item sm={8} container>
          <Grid item container direction="column" alignItems="flex-start">
            <Typography variant="h4" gutterBottom className={classes.secondaryParagraph}>
              {props.language} Translation
            </Typography>
            <hr className={classes.horizontalLine} />
            <Typography variant="h6" gutterBottom className={classes.containerDescription}>
              {components[type][orderStatus].label}
            </Typography>
            <Typography variant="h6" gutterBottom className={classes.fileName}>
              File Name: {props.fileName}
            </Typography>
          </Grid>
        </Grid>
        <Grid item sm={4} container justify="flex-end" alignContent="flex-end">
          {components[type][orderStatus].child}
        </Grid>
      </Grid>
    </Paper>
  );
}
