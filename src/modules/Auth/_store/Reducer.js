import {
    FIRSTNAME_CHANGED, LASTNAME_CHANGED, EMAIL_CHANGED, PASSWORD_CHANGED, PASSWORD_CONFIRMATION_CHANGED, USER_PHOTO_CHANGED,
    ATTEMPT_USER_LOGIN, USER_LOGIN_FAIL, USER_LOGIN_SUCCESS,
    ATTEMPT_USER_REGISTER, USER_REGISTER_FAIL, USER_REGISTER_SUCCESS
} from './Types';

const INITIAL_STATE = {
    user: null,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password_confirmation: '',
    user_photo: '',
    attempting_user_login: false,
    attempting_user_register: false,
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case FIRSTNAME_CHANGED:
            return { ...state, firstname: action.payload };

        case LASTNAME_CHANGED:
            return { ...state, lastname: action.payload };

        case EMAIL_CHANGED:
            return { ...state, email: action.payload };

        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };

        case PASSWORD_CONFIRMATION_CHANGED:
            return { ...state, password_confirmation: action.payload };

        case USER_PHOTO_CHANGED:
            return { ...state, user_photo: action.payload };

        case ATTEMPT_USER_LOGIN:
            return { ...state, attempting_user_login: true };

        case USER_LOGIN_FAIL:
            return { ...state, attempting_user_login: false, user_login_errors: action.payload };

        case USER_LOGIN_SUCCESS:
            return { ...state, attempting_user_login: false, user: action.payload };

        case ATTEMPT_USER_REGISTER:
            return { ...state, attempting_user_register: true };

        case USER_REGISTER_FAIL:
            return { ...state, attempting_user_register: false, user_register_errors: action.payload };

        case USER_REGISTER_SUCCESS:
            return { ...state, attempting_user_register: false, user: action.payload };

        default:
            return state;
    }
}
