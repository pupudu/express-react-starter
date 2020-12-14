import { useStyles } from './styles';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CustomizedSteppers from './Stepper';
import LanguageContainer from './LanguageContainer';
import { useFetch } from '../core/fetch';
import { useParams } from 'react-router-dom';

export const Order = () => {
  const params = useParams();
  const classes = useStyles();
  const allOrderInformation = useFetch({ url: '/api/orderDetails/get-all-order-information' });
  const allTranslationInformation = useFetch({
    url: '/api/orderDetails/get-all-translation-information',
  });
  const currentOrder = allOrderInformation.filter(
    (order) => order.id === Number(params.orderId),
  )[0];
  console.log(currentOrder);
  const currentTranslations = allTranslationInformation.filter(
    (translation) => translation.order_number === currentOrder.id,
  );
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
        <CustomizedSteppers status={currentOrder.orderStatus} />
        {console.log(currentOrder.id)}
        {currentTranslations.map((translation) => {
          return (
            <LanguageContainer
              language={translation.language}
              fileName={currentOrder.file_name}
              orderStatus={translation.translation_status}
              orderNumber={currentOrder.id}
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
