import axios from '../../../store/service';

export default {
    /**
     * Route for registering user in the app.
     *
     * @param {Object} data
     */
    register(data) {
        return axios.post('users/register', data)
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(error.response.data));
    },

    /**
     * Route for logging user in.
     *
     * @param {Object} data
     */
    login(data) {
        return axios.post('users/login', data)
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(error.response.data));
    },

    /**
     * Route for requesting email reset.
     *
     * @param {String} email
     */
    reset(email) {
        return axios.post('api/password/reset', email)
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(error.response.data));
    },

    /**
     * Route for getting authenticated user details.
     */
    get() {
        return axios.get('api/user')
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(error.response.data));
    },

    /**
     * Route for updating authenticated user details.
     */
    update(data) {
        return axios.post('api/user/profile', data)
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(error.response.data));
    },

    /**
     * Route for sending user push token to server.
     *
     * @param {String} push_token
     */
    sendPushToken(push_token) {
        return axios.get('api/user/own/push_notification', { params: { push_token }})
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(error.response.data));
    },

    /**
     * Route for getting phone verification code.
     *
     * @param {Object} data
     */
    getPhoneVerificationCode(data) {
        return axios.post('api/register/verify', data)
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(error.response.data));
    }
};
