const fetch = require('node-fetch');

export default function getResponseFromAPI() {
  const url = 'https://api.spacexdata.com/v4/launches/latest';
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Not exact reponse returned');
      }
      return response.json();
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    });
}
