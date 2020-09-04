import { useStyles } from './styles';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CustomizedSteppers from './Stepper';
import LanguageContainer from './LanguageContainer';
import { useFetch } from '../core/fetch';

export const Order = (props) => {
  const classes = useStyles();
  const userOrderInformation = useFetch({ url: '/api/orderDetails/get-order-information' });
  const currentOrder = userOrderInformation.filter((order) => order.id === 1003)[0];
  const userTranslationInformation = useFetch({
    url: '/api/orderDetails/get-translation-information',
  }).filter((translation) => translation.order_number === currentOrder.id);
  const userInformation = useFetch({ url: '/api/user/get-user-information' });

  return (
    <div className={classes.allJobsMainContainer}>
      <Paper className={classes.statusContainer}>
        <Typography
          variant="h4"
          align="center"
          color="textSecondary"
          component="p"
          className={classes.secondaryHeading}
        >
          Order #{currentOrder.id} ({currentOrder.order_date})
        </Typography>
        <CustomizedSteppers status={userOrderInformation.orderStatus} />
        {userTranslationInformation.map((translation) => {
          return (
            <LanguageContainer
              language={translation.language}
              fileName={currentOrder.file_name}
              orderStatus={translation.translation_status}
              type={userInformation.signinAs}
            />
          );
        })}
      </Paper>
    </div>
  );
};

// Order Status
// payable - confirmed details but not payed yet
// placed - order was payed but not picked up by a customer yet
// pending - order picked up by a translator and its currently translating
// translated - Translation has been submitted by the translator
// reviewable -  translator uploaded the translated files and waiting for approval
// revised -  it specialist asked for a revision
// approved - approved by the it specialist
// clientRevised - client asked for a revision
// clientApproved - translation is accepted by the client
