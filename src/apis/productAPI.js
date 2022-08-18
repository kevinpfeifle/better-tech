const axios = require('axios');

// TODO: For now this relies on JSON-Server, however once it is an actual DB call 
// this will need to be in configurations.
function getProducts() {
    return new Promise((resolve, reject) => {
        axios.get('localhost:4000/products').then(function (response) {
            resolve(response);
        }).catch((err) => {
            console.log(err);
            reject(err);
        });
    }); 
}

export {
    getProducts
}