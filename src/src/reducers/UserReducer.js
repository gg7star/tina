import { createAction, handleActions } from 'redux-actions'

export const actions = {
  setUserDetails: 'SET_USER_DETAILS',
  getUserDetails: 'GET_USER_DETAILS'
}

export const getUserDetails = createAction(actions.getUserDetails)
export const setUserDetails = createAction(actions.setUserDetails)

const INITIAL_STATE = {
  userDetails: [],
};


export default handleActions({
  [actions.setUserDetails]: (state, action) => {
    const userDetails = [...state.userDetails]
    userDetails.push(action.payload)
    return {
      ...state,
      userDetails
    }
  }
}, INITIAL_STATE)
