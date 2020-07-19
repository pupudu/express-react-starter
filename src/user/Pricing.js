import React from 'react';
import { useStyles } from './styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import sinhala from '../images/sinhala.jpg';
import english from '../images/english.jpg';
import tamil from '../images/tamil.jpg';
import sinhalaIcon from '../images/sinhala.png';
import englishIcon from '../images/english.png';
import tamilIcon from '../images/tamil.png';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export const Pricing = () => {
  const classes = useStyles();
  const tiers = [
    {
      title: 'Free',
      price: '1',
      description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
      buttonText: 'Sign up for free',
      buttonVariant: 'outlined',
    },
    {
      title: 'Pro',
      subheader: 'Most popular',
      price: '5',
      description: [
        '20 users included',
        '10 GB of storage',
        'Help center access',
        'Priority email support',
      ],
      buttonText: 'Get started',
      buttonVariant: 'contained',
    },
    {
      title: 'Enterprise',
      price: '3',
      description: [
        '50 users included',
        '30 GB of storage',
        'Help center access',
        'Phone & email support',
      ],
      buttonText: 'Contact us',
      buttonVariant: 'outlined',
    },
  ];
  const tiersLanguage = [
    {
      title: 'Sinhala',
      image: sinhala,
      buttonIcon: [englishIcon, tamilIcon],
      buttonText: ['English', 'Tamil'],
      value: [10, 30],
    },
    {
      title: 'English',
      image: english,
      buttonIcon: [sinhalaIcon, tamilIcon],
      buttonText: ['Sinhala', 'Tamil'],
      value: [20, 30],
    },
    {
      title: 'Tamil',
      image: tamil,
      buttonIcon: [englishIcon, sinhalaIcon],
      buttonText: ['English', 'Sinhala'],
      value: [10, 20],
    },
  ];
  const [language, setLanguage] = React.useState('');
  const loop = [0, 1];
  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <div className={classes.pricePageMainContainer}>
      <div className={classes.pricingSection}>
        <Container maxWidth="sm" component="main" className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Pricing and Languages
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" component="p">
            Price per Page , Quality and Recommended Use
          </Typography>
        </Container>
        {/* End hero unit */}
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map((tier) => (
              <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                <Card>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center' }}
                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                    className={classes.cardHeader}
                  />
                  <CardContent>
                    <div className={classes.cardPricing}>
                      <Typography component="h2" variant="h3" color="textPrimary">
                        ${tier.price}
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                        /page
                      </Typography>
                    </div>
                    <ul>
                      {tier.description.map((line) => (
                        <Typography component="li" variant="subtitle1" align="center" key={line}>
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button fullWidth variant={tier.buttonVariant} color="primary">
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      <div className={classes.languageSection}>
        <Container maxWidth="sm" component="main" className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Available Languages
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" component="p">
            Currently only local Languages are available.
          </Typography>
        </Container>
        {/* End hero unit */}
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {tiersLanguage.map((tier) => (
              <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                <Card>
                  <CardHeader
                    title={tier.title}
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center' }}
                    className={classes.cardHeader}
                  />
                  <CardContent className={classes.cardLanguage}>
                    <img src={tier.image} alt="Language-Picture" />
                  </CardContent>
                  <CardActions>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="language">To Language</InputLabel>
                      <Select
                        labelId="language-label"
                        id="language"
                        value={language}
                        // onChange={handleChange}
                      >
                        {loop.map((item) => (
                          <MenuItem value={tier.value[item]}>
                            <img
                              src={tier.buttonIcon[item]}
                              className={classes.languageIcon}
                              alt="language-icon"
                            />
                            <h6>{tier.buttonText[item]}</h6>
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};
