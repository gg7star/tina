import React, { Component } from 'react';
import { Router, Scene} from 'react-native-router-flux';
import Home from '../screens/Home'
import Questionnaire from '../screens/Questionnaire'
import NoResult from '../screens/NoResult';
import Depanneurs from '../screens/Depanneurs';
import FoundResult from '../screens/FoundResult';
import SignIn from '../screens/SignIn';
import RegPassword from '../screens/RegPassword';
import RegPostcode from '../screens/RegPostcode';
import RegName from '../screens/RegName';
import RegEmail from '../screens/RegEmail';

class Routes extends Component {
	render() {
		return (
			<Router>
        		<Scene key="root">
				  <Scene key="home" hideNavBar component={Home} />
          		  <Scene key="questionnaire" hideNavBar component={Questionnaire} />
				  <Scene key="noresult" hideNavBar component={NoResult} />
				  <Scene key="depanneurs" hideNavBar component={Depanneurs} />
				  <Scene key="foundresult" hideNavBar component={FoundResult} />
				  <Scene key="regemail" hideNavBar component={RegEmail} />
				  <Scene key="regname" hideNavBar component={RegName} />
				  <Scene key="regpostcode" hideNavBar component={RegPostcode} />
				  <Scene key="regpassword" hideNavBar component={RegPassword} />
				  <Scene key="signin" hideNavBar component={SignIn} />
        		</Scene>
			</Router>
		)
	}
}

export default Routes;