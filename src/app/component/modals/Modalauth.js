'use client'
import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card } from 'react-bootstrap';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 500 }}>
    
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab className='p-4' label="Login" {...a11yProps(0)} />
          <Tab className='p-4' label="Sign Up" {...a11yProps(1)} />

        </Tabs>
   
      <TabPanel value={value} index={0} dir={theme.direction}>
     <Card className=' bd-0'>
      <Card.Body>
      <h5 className='mb-4'>Login to continue</h5>
       <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button variant="primary" className='btn-block btn-lg w-full' type="submit">
        Login
      </Button>
    </Form>  
      </Card.Body>
     </Card>
     

      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
      
      <Card className=' bd-0'>
      <Card.Body>
      <h5 className='mb-4'>Sign up to get started</h5>
       <Form>
      <Form.Group className="mb-3" controlId="formBasicFirstname">
        <Form.Label>First name</Form.Label>
        <Form.Control type="text" placeholder="Enter First name" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastname">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last name" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="email" placeholder="Enter Phone number" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicConfirmpassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder=" ConfirmPassword" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicLastname">
        <Form.Label>Referal code</Form.Label>
        <Form.Control type="text" placeholder="Enter Referal code" />
       
      </Form.Group>

      <Button variant="primary" className='btn-block btn-lg w-full' type="submit">
        Sign up
      </Button>
    </Form>  
      </Card.Body>
     </Card>

      </TabPanel>

    </Box>
  );
}
