import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../sagas/';

export default () => {
    /* ------------- Assemble The Reducers ------------- */

    const appReducer = combineReducers({
        localization: require('./LocalizationRedux').reducer,
    })


    const rootReducer = (state, action) => { 
        return appReducer(state, action)
    }

    return configureStore(rootReducer, rootSaga)
}