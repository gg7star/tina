import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SocialIcon } from 'react-native-elements'

import GradientContainer from '../components/GradientContainer'
import LoginForm from '../templates/LoginForm'
import { loginUser, createUser, fbLoginUser } from '../reducers/AuthReducer'
import {getUserDetails} from '../reducers/UserReducer'
import {setGeoPosition} from '../reducers/AppStateReducer'
import {getVenueDetails} from '../reducers/RatingReducer'
import * as venues from '../Api/Venue'
import {getLocalEvents} from '../reducers/EventReducer'
import * as types from '../outlitdata/utils/constTypesUtils'
import {getLocalVenues} from '../reducers/VenueReducer'


class Login extends Component {
  componentWillMount() {
    this.props.loginUser({email: 'npaul98@vt.edu', password: 'paulnoble'})
    //const queryArray = [['Food', 'Arts & Entertainment'], ['Beer Store', 'Liquor Store'], ['Coffee Shop', 'Dessert Shop', 'Sorority House', 'Fraternity House', 'Greek Life']]
    //const queryArray = [[''], ['Bar'], ['Food']]
   //  const queryArray = [['']]
   //  navigator.geolocation.getCurrentPosition(
   //    (location) => {
   //      this.props.setGeoPosition({
   //        longitude: location.coords.longitude,
   //        latitude: location.coords.latitude
   //      })
   //
   //      const CURRENT_LOCATION = {
   //        center: {
   //          longitude: location.coords.longitude,
   //          latitude: location.coords.latitude
   //        },
   //        radius: 10,
   //      };
   //      queryArray.forEach((query) => {
   //        venues.getLocalVenues([CURRENT_LOCATION, query]).then((venues) => {
   //          this.props.getVenueDetails([CURRENT_LOCATION, venues]);
   //        })
   //        this.props.getLocalVenues([CURRENT_LOCATION, query])
   //      })
   //
   //      this.props.getLocalEvents(CURRENT_LOCATION);
   // })
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <GradientContainer>
        <LoginForm
          signup={(username, password) => {
            this.props.loginUser({username, password})
          }}
          fbAuth={()=>{this.props.fbLoginUser()}}
          toSignup={()=>{this.props.navigation.navigate('Signup')}}
        />
      </GradientContainer>
    )
  }
}

const mapStateToProps = (state) => ({
  email: state.auth.email,
  username: state.auth.username,
  password: state.auth.password,
  error: state.auth.error,
  geo_position: state.appstate.geo_position,
  venues: state.venues.venues

})

const mapDispatchToProps = {
  loginUser,
  createUser,
  fbLoginUser,
  getUserDetails,
  setGeoPosition,
  getVenueDetails,
  getLocalEvents,
  getLocalVenues,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
