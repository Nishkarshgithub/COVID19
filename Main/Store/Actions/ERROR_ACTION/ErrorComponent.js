import { ReducerConstant } from '../../../Constants/ReducerConstants';

const ERROR_DIALOG = (error) => {
  return {type: ReducerConstant.ERROR_DIALOG, payload:error};
};

const ERROR_DIALOG_CLOSE = (boolean) => {
  return {type: ReducerConstant.ERROR_DIALOG_CLOSE, payload:boolean};
};

export const ERROR_DIALOG_FUNCTION = (err) => {
  return dispatch => {
    dispatch(ERROR_DIALOG(err));
  };
};

export const ERROR_DIALOG_CLOSE_FUNCTION = (boolean) => {
  return dispatch => {
    dispatch(ERROR_DIALOG_CLOSE(boolean));
  };
};



