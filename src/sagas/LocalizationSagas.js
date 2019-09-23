import { call, put } from 'redux-saga/effects';
import LocalizationTypes from '../redux/LocalizationRedux';

export function* getLocalizationData(api, action) {
    try {
        const response = yield call(api.getLocalizations, action.body);
        yield put(LocalizationTypes.getLocalizationSuccess(response))
    } catch (error) {
        yield put(LocalizationTypes.getLocalizationFailure(error))
    }
}
