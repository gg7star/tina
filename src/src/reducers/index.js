// export file for all reducer files
import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NavReducer from './NavReducer';
import EventReducer from './EventReducer';
import VenueReducer from './VenueReducer';
import SearchReducer from './SearchReducer';
import AppStateReducer from './AppStateReducer';
import DiscoveryReducer from './DiscoveryReducer';
import UserReducer from './UserReducer';
import RatingReducer from  './RatingReducer'
import EventHosting from './EventHosting'

export default combineReducers({
  nav: NavReducer,
  auth: AuthReducer,
  events: EventReducer,
  eventHosting: EventHosting,
  venues: VenueReducer,
  search: SearchReducer,
  appstate: AppStateReducer,
  discovery: DiscoveryReducer,
  user: UserReducer,
  rating: RatingReducer,
});
