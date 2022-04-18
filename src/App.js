// import logo from './logo.svg';
import './App.css';
import { Redirect } from 'react-router-dom';
import React from 'react'
import {Switch,Route,Link  } from 'react-router-dom';
import {Layout,Typography,Space} from 'antd'
import {Navbar,HomePage,LoginForm,Contact,Cryptocurrencies,CryptoDetails,News,} from './components';
import './App.css';
function App() {
  return (

    <div className="app">
      
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Switch>
              <Route exact path='/'>
                <HomePage/>
              </Route>
              <Route exact path='/login'>
                <LoginForm/>
                {/* <Redirect to="/" /> */}
              </Route>
              <Route exact path='/contact'>
                <Contact/>
              </Route>
              <Route exact path='/cryptocurrencies'>
                <Cryptocurrencies/>
              </Route>
              <Route exact path='/crypto/:coinId'>
                <CryptoDetails/>
              </Route>
              <Route exact path='/news'>
                <News/>
              </Route>
              <Redirect to='\' />
            </Switch>
          </div>
        </Layout>
      
      <div className='footer'>
        <Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
          Cryptoverse <br/>
          All right reserverd
        </Typography.Title>
        <space>
          <span style={{margin:'10px'}}><Link to='/'>Home</Link></span>
          <span style={{margin:'10px'}}><Link to='/Exchanges'>Exchanges</Link></span>
          <span style={{margin:'10px'}}><Link to='/News'>News</Link></span>
          
        </space>
      </div>
</div>
    </div>
  );
}

export default App;

// npm install antd @ant-design/icons react-redux @reduxjs/toolkit axios  chart.js html-react-parser millify moment react-chartjs-2
// antd is for design
// @ant-design/icons is for icon
// chart.js for create charts
// html-react-parser for parse html data
// millify is for extreme large number into a  readable string
// moment for parse time and 
// react-chartjs-2 for render chartjs