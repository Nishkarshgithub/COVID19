import { ReducerConstant } from '../../Constants/ReducerConstants';

const initialState = {
  visible: false,
  error: null
};

const ErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ReducerConstant.RESET_APP: return { ...state, visible:false, error: null };
    case ReducerConstant.ERROR_DIALOG: return { ...state, visible:true, error: action.payload };
    case ReducerConstant.ERROR_DIALOG_CLOSE: return { ...state, visible:action.payload, error:null };
    default: return state;
  }
};

export default ErrorReducer;