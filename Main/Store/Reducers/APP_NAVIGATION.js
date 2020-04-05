import { ReducerConstant } from '../../Constants/ReducerConstants';

const initialState = {
  isAuthenticated: false,
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case ReducerConstant.RESET_APP: return { ...state, isAuthenticated:false };
    case ReducerConstant.APP_AUTH_STATE: return { ...state, isAuthenticated:true };
    default: return state;
  }
};

export default appState;