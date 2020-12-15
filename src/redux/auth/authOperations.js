import axios from 'axios';
import authActions from './authActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const register = credentials => dispatch => {
  dispatch(authActions.registerRequest());
  axios
    .post('/users/signup', credentials)
    .then(response => {
      console.log(response.data);
      //   token.set(response.data.token);
      dispatch(authActions.registerSuccess(response.data));
    })
    .catch(error => dispatch(authActions.registerError(error)));
};

export default { register };
