import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';



/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
    getLocalizationRequest: [],
    getLocalizationSuccess: ['data'],
    getLocalizationFailure: ['error']

})

export const LocalizationTypes = Types
export default Creators


/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({

    localizationData: [],
    getlocalizationFetching: false,
    getlocalizationErrorMessage: '',
    getLocalizationError: false,

})


/* ------------- Reducers ------------- */
export const getLocalizationRequest = (state, action) => {
    return state.merge({
        getlocalizationFetching: true,
        getlocalizationErrorMessage: '',
        getLocalizationError: false,
    })
}

export const getLocalizationSuccess = (state, action) => {
    return state.merge({
        localizationData: action.data,
        getlocalizationFetching: false,
        getlocalizationErrorMessage: '',
        getLocalizationError: false,

    })
}

export const getLocalizationFailure = (state, action) => {
    return state.merge({
        getlocalizationFetching: false,
        getlocalizationErrorMessage: action.error,
        getLocalizationError: true,
    })
}


/* ------------- Connection Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_LOCALIZATION_REQUEST]: getLocalizationRequest,
    [Types.GET_LOCALIZATION_SUCCESS]: getLocalizationSuccess,
    [Types.GET_LOCALIZATION_FAILURE]: getLocalizationFailure,

})