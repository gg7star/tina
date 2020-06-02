/**
 * Tina React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Home from './screens/Home';
import Questionnaire from './screens/Questionnaire';
import NoResult from './screens/NoResult'
import Depanneurs from './screens/Depanneurs'
import FoundResult from './screens/FoundResult'
import RegEmail from './screens/RegEmail'
import RegPostcode from './screens/RegPostcode'
import { Router } from 'react-native-router-flux';
import RootRoutes from './routes';
import RegPassword from './screens/RegPassword';
import SignIn from './screens/SignIn';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      didFinish: false,
    }
  }

  componentDidMount(){
    setTimeout(() => {
      SplashScreen.hide();
      this.setState({didFinish: true});
    }, 2500)
  }

  render(){
    if (this.state.didFinish) {
      return(
          // <NoResult qType={"ordinateur"}/>
          // <Home />
            <RootRoutes />
          // <Depanneurs />
          // <FoundResult qType={"ordinateur"}/>
          //  <RegEmail />
          // <RegPassword />
          // <RegPostcode />
      )
    }else{
      return null;
    }    
  }
}

export default App;
