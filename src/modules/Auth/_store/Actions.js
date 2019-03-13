import Auth from './Service';
import { AsyncStorage } from 'react-native';
import {
    EMAIL_CHANGED, PASSWORD_CHANGED, FIRSTNAME_CHANGED, LASTNAME_CHANGED, USER_PHOTO_CHANGED, PASSWORD_CONFIRMATION_CHANGED,
    ATTEMPT_USER_LOGIN, USER_LOGIN_FAIL, USER_LOGIN_SUCCESS,
    ATTEMPT_USER_REGISTER, USER_REGISTER_FAIL, USER_REGISTER_SUCCESS
} from './Types';

export const emailChanged = payload => ({ type: EMAIL_CHANGED, payload });
export const passwordChanged = payload => ({ type: PASSWORD_CHANGED, payload });
export const passwordConfirmationChanged = payload => ({ type: PASSWORD_CONFIRMATION_CHANGED, payload });
export const firstnameChanged = payload => ({ type: FIRSTNAME_CHANGED, payload });
export const LastnameChanged = payload => ({ type: LASTNAME_CHANGED, payload });
export const userPhotoChanged = payload => ({ type: USER_PHOTO_CHANGED, payload });

/**
 * Action creator for attempting to log user in.
 *
 * @param {Object} data
 * @param {Function} callback
 */
export const attemptUserLogin = (data, callback) => async dispatch => {
    try {
        dispatch({ type: ATTEMPT_USER_LOGIN });

        const user = await Auth.login(data);

        if (user) {
            console.log('this is the user data: ', user);

            if (user.api_token) {
                await AsyncStorage.setItem('access_token', user.api_token);
            }

            dispatch({ type: USER_LOGIN_SUCCESS, payload: user });

            if (callback) {
                callback();
            }
        }
    } catch (error) {
        console.log('this is the error from attempting to log user in: ', error);
        dispatch({ type: USER_LOGIN_FAIL, payload: error });
    }
}

/**
 * Action creator for attempting to register user.
 *
 * @param {Object} data
 * @param {Function} callback
 */
export const attemptUserRegister = (data, callback) => async dispatch => {
    try {
        dispatch({ type: ATTEMPT_USER_REGISTER });

        const user = await Auth.register(data);

        if (user) {
            console.log('this is the user data: ', user);

            if (user.api_token) {
                await AsyncStorage.setItem('access_token', user.api_token);
            }

            dispatch({ type: USER_REGISTER_SUCCESS, payload: user });

            if (callback) {
                callback();
            }
        }
    } catch (error) {
        console.log('this is the error from attempting to register user: ', error);
        dispatch({ type: USER_REGISTER_FAIL, payload: error });
    }
}
