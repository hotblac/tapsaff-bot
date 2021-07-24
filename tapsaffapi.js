const fetch = require('node-fetch');

module.exports = {

    tapsAffStatus: (city) => {
        return fetch('https://taps-aff.co.uk/api/' + city)
            .then(response => response.json())
            .then(data => data.taps.status)
            .catch(error => {
                console.log(error.message);
                return 'unknown';
            });
    }
};
