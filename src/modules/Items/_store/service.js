import axios from '../../../store/service';

export default {
    /**
     * Item Service - Get all items
     */
    all() {
        return axios.get('items')
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(error.response.data));
    },

    /**
     * Item Service - Get specified item
     *
     * @param {Number} id
     */
    show(id) {
        return axios.get('items', { params: { id }})
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(error.response.data));
    },

    /**
     * Item Service - Create new item
     *
     * @param {Object} data
     */
    store(data) {
        return axios.post('items', data)
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(error.response.data));
    }
};

