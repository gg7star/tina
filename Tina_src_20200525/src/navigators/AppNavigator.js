import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator, DrawerNavigator, TabNavigator, TabBarTop, NavigationActions } from 'react-navigation'
import Settings from '../screens/Settings'
import Welcome from '../screens/Welcome'
import DirectionMap from '../screens/DirectionMap'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import SignupIntro from '../screens/SignupIntro'
import Map from '../screens/Map'
import CalendarView from '../screens/Calendar'
import ProfilePage from '../screens/ProfilePage'
import Event from '../screens/Event'
import EventChat from '../screens/EventChat'
import Venue from '../screens/Venue'
import UITester from '../screens/UITester'
import SearchEvents from '../screens/SearchEvents'
import SearchVenues from '../screens/SearchVenues'
import Discovery from '../screens/Discovery'
import HostInfo from '../screens/HostInfo'
import HostGuest from '../screens/HostGuest'
import HostMedia from '../screens/HostMedia'
import PhoneVerify from '../screens/PhoneVerify'
import CodeVerify from '../screens/CodeVerify'
import NavBarwithSearch from '../templates/NavBarWithSearch'
import NavBar from '../templates/NavBar'
import { addListener } from '../Store'


export const AppNavigator = StackNavigator({
  Login: { screen: Login },
  Signup: { screen: Signup },
  SignupIntro : { screen: SignupIntro, navigationOptions: { header: null } },
  PhoneVerify: { screen: PhoneVerify },
  Discovery: {screen: Discovery},
  Welcome: { screen: Welcome },
  Main: { screen: MainNavigator },
  Event: { screen: Event },
  EventChat: { screen: EventChat },
  Venue: { screen: Venue },
  DirectionMap: { screen: DirectionMap },
  HostEvent: { screen: EventHosting },
  UITest: { screen: UITester, navigationOptions: { header: null } }
}, {
  navigationOptions: {
    header: (props) => (
      <NavBar
        navigation={props.navigation}
      />
    ),
  },
  headerMode: 'float',
  mode: 'modal'
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav, addListener })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
