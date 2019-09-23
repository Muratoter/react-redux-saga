import { takeLatest, all } from 'redux-saga/effects';

import LocalizationApi from '../services/LocalizationApi';
/* ------------- Types ------------- */
import { LocalizationTypes } from '../redux/LocalizationRedux';


/* ------------- Sagas ------------- */
import { getLocalizationData } from '../sagas/LocalizationSagas';


/* ------------- API's ------------- */
const localizationApi = LocalizationApi.create();


//all api request actions
export default function* root() {
    yield all([
        takeLatest(LocalizationTypes.GET_LOCALIZATION_REQUEST, getLocalizationData, localizationApi),
    ])
}
