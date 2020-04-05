import { ReducerConstant } from '../../../Constants/ReducerConstants';

const ACTION_NAVIGATION = () => {
  return {type: ReducerConstant.APP_AUTH_STATE};
};

export const AUTH_AUTHENTICATION = () => {
  return dispatch => {
    dispatch(ACTION_NAVIGATION());
  };
};