import axios from '../../../store/service';

export default {
    /**
     * Route for getting all jackpots.
     */
    all() {
        return axios.get('jackpots')
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(error.response.data));
    },

    /**
     * Route for adding new jackpot
     *
     * @param {Object} data
     */
    store(data) {
        return axios.post('jackpots', data)
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(error.response.data));
    }
};
