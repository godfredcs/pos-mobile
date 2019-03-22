import moment from 'moment';

export default {
    formattedCedis(amount) {
        return `GHC ${ Number(amount).toFixed(2) }`;
    },

    formattedDate(date) {
        return moment(date).format('MMMM Do YYYY');
    },

    formattedDateTime(date) {
        return moment(date).format('Do MMMM YYYY, h:mm:ss a');
    }
}
