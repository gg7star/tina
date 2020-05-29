import React, { Component } from 'react';
import { Router, Stack, Scene} from 'react-native-router-flux';
import Home from '../screens/Home'
import Questionnaire from '../screens/Questionnaire'
import NoResult from '../screens/NoResult';

class Routes extends Component {
	render() {
		return (
			<Router>
        		<Scene key="root">
				  <Scene key="home" hideNavBar component={Home} />
          		  <Scene key="questionnaire" hideNavBar component={Questionnaire} />
				  <Scene key="noresult" hideNavBar component={NoResult} />
        		</Scene>
			</Router>
		)
	}
}

export default Routes;