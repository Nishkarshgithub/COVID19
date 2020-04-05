import axios from 'axios';
import { ReducerConstant } from '../../../Constants/ReducerConstants';

const HOME_START = () => {
  return {type: ReducerConstant.HOME_START};
};

const HOME_SUCCESS = (data) => {
  return {type: ReducerConstant.HOME_SUCCESS, payload: data};
};

const HOME_ERROR = (error) => {
  return {type: ReducerConstant.HOME_FAIL, payload: error};
};

export const HOME_COUNTRY_COVID_START = () => {
  return {type: ReducerConstant.HOME_COUNTRY_COVID_START};
};

const HOME_COUNTRY_COVID_SUCCESS = (data) => {
  return {type: ReducerConstant.HOME_COUNTRY_COVID_SUCCESS, payload: data};
};

const HOME_COUNTRY_COVID_FAIL = (error) => {
  return {type: ReducerConstant.HOME_COUNTRY_COVID_FAIL, payload: error};
};

const HOME_WORLD_COVID_SUCCESS = (data) => {
  return {type: ReducerConstant.HOME_WORLD_COVID_SUCCESS, payload: data};
};

const ERROR_DIALOG = (error) => {
  return {type: ReducerConstant.ERROR_DIALOG, payload:error};
};

// ?country=India

export const HOME_FUNCTION = () => {
  return async dispatch => {
    dispatch(HOME_START());
    axios.get("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "33c4040488mshb9d509c308b46dbp1202f1jsn5836197eee5d"
      }
    }).then(res => {
      if(res.data != null){
        dispatch(HOME_SUCCESS(res.data));
      } else {
        dispatch(HOME_ERROR(res.data));
        dispatch(ERROR_DIALOG(res.data));
      }
    }).catch(err => {
      dispatch(ERROR_DIALOG(err));
      dispatch(HOME_ERROR(err));
    })
  }
}



export const FETCH_COUNTRY_DATA = (country) => {
  return async dispatch => {
    dispatch(HOME_COUNTRY_COVID_START());
    axios.get("https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=" + country, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "33c4040488mshb9d509c308b46dbp1202f1jsn5836197eee5d"
      }
    }).then(res => {
      if(res.data != null){
        dispatch(HOME_COUNTRY_COVID_SUCCESS(res.data));
      } else {
        dispatch(ERROR_DIALOG(res.data));
        dispatch(HOME_COUNTRY_COVID_FAIL(res.data));
      }
    }).catch(err => {
      dispatch(ERROR_DIALOG(err));
      dispatch(HOME_COUNTRY_COVID_FAIL(err));
    })
  }
}


export const HOME_COVID_TOTAL_FUNCTION = () => {
  return async dispatch => {
    axios.get("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "33c4040488mshb9d509c308b46dbp1202f1jsn5836197eee5d"
      }
    }).then(res => {
        dispatch(HOME_WORLD_COVID_SUCCESS(res.data));
    }).catch(err => {
      dispatch(ERROR_DIALOG(err));
    })
  }
}