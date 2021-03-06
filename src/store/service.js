import {AsyncStorage} from 'react-native';
import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'endpoint',

    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    }
});

// Intercept each request and set the bearer token for user
axios.interceptors.request.use(async config => {
    let accessToken = await AsyncStorage.getItem('access_token');

    if (accessToken && !config.headers.common.Authorization) {
        config.headers.common.Authorization = `Bearer ${accessToken}`;
    }

    return config;
});

export default axios;
