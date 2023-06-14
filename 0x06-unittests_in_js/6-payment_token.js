/**
 * creates a fn which takes an arg success - boolean
 * when success is true, returns resolved promise with object
 * otherwise does nothing
 */

const getPaymentTokenFromAPI = (success) => new Promise((resolve, _reject) => {
  if (success) {
    resolve({data: 'Successful response from the API'});
  }
});

module.exports = getPaymentTokenFromAPI;
