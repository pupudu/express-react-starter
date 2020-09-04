import { useStyles } from './styles';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { CustomTable } from './CustomTable';

export const AvailableJobs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <div className={classes.allJobsMainContainer}>
      <div className={classes.tabsContainer}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="All Jobs" {...a11yProps(0)} />
            <Tab label="Priority Jobs" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <CustomTable />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CustomTable />
        </TabPanel>
      </div>
    </div>
  );
};
