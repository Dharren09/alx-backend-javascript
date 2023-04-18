import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [uploadPhoto(fileName), signUpUser(firstName, lastName)];

  return Promise.allSettled(promises)
    .then(results => {
      return results.map(result => {
        return {
          status: result.status,
          value: result.status === 'fulfilled' ? result.value : result.reason
        };
      });
    })
    .catch(error => {
      console.log("Signup system offline");
      return [];
    });
}
