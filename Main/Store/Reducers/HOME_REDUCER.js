import { ReducerConstant } from '../../Constants/ReducerConstants';

const initialState = {
  isDataAvailable: false,
  isCountryDataAvailable: false,
  countryData: null,
  worldCovidData: null,
  covidData: null
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ReducerConstant.HOME_START: return { ...state, isDataAvailable: false };
    case ReducerConstant.HOME_COUNTRY_COVID_START: return { ...state, isCountryDataAvailable: true, countryData: null };
    case ReducerConstant.HOME_SUCCESS: return { ...state, isDataAvailable: true, covidData: action.payload };
    case ReducerConstant.HOME_WORLD_COVID_SUCCESS: return { ...state, worldCovidData: action.payload };
    case ReducerConstant.HOME_COUNTRY_COVID_SUCCESS: return { ...state, isCountryDataAvailable: false, countryData: action.payload };
    case ReducerConstant.HOME_COUNTRY_COVID_FAIL: return { ...state, isCountryDataAvailable: false, countryData: null };
    case ReducerConstant.HOME_ERROR: return { ...state, isDataAvailable: false };
    default: return state;
  }
};

export default homeReducer;