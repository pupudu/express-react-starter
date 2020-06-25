import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

export const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    height: '100',
  },
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
    width: '500px',
    marginBottom: '20px',
  },
  cardMedia: {
    marginTop: '50px',
    height: '800px',
  },
  background: {
    display: 'inline-block',
    overflow: 'hidden',
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
  avatar: {
    marginLeft: '20%',
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
  button: {
    margin: theme.spacing(1),
    marginRight: '20%',
    fontSize: '30px',
    padding: '14px 40px',
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
  heading: {
    marginTop: 225,
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
    marginBottom: 100,
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
