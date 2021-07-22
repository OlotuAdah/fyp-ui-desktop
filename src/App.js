import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import DataProvider from './context/DataProvider';
//import { Button } from 'antd';
// import './App.css';
import 'antd/dist/antd.css';

// import { Steps } from 'antd';

// const { Step } = Steps;

const App = () => (
  <DataProvider>
    <Router>
      <Switch>
        <Route path=''>
          <HomePage />
        </Route>
        <Route path='/class'>{/* <HomePage /> */}</Route>
      </Switch>

      {/* <Button type='primary'>Button</Button>
    <br />

    <Steps current={1}>
      <Step title='Finished' description='This is a description.' />
      <Step
        title='In Progress'
        subTitle='Left 00:00:08'
        description='This is a description.'
      />
      <Step title='Waiting' description='This is a description.' />
    </Steps> */}
    </Router>
  </DataProvider>
);

export default App;
