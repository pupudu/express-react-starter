import cover from './images/backk.jpg';
import { Heading } from '@chakra-ui/core';
import Typography from '@material-ui/core/Typography';
import AcUnitSharpIcon from '@material-ui/icons/AcUnitSharp';
import card from './images/card.jpg';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Avatar from '@material-ui/core/Avatar';
import avatar1 from './images/avatar1.png';
import avatar2 from './images/avatar2.png';
import avatar3 from './images/avatar3.png';
import avatar4 from './images/avatar4.webp';
import { Button, Card, CardContent } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import InputIcon from '@material-ui/icons/Input';
import CallIcon from '@material-ui/icons/Call';
import CardMedia from '@material-ui/core/CardMedia';
import back from './images/back.jpg';
import React from 'react';
import { useStyles } from './styles';

export const Home = () => {
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
            <Typography variant="h6" className={classes.card2body}>
              Our intuitive platform allows companies of any size to order
            </Typography>
            <Typography variant="h6" className={classes.card2body}>
              cost-efficient translations from professional translators.
            </Typography>
          </CardContent>
        </div>
        <CardMedia className={classes.cover} image={back} title="Live from space album cover" />
      </Card>
    </div>
  );
};
