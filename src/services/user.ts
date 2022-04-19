import { HOST } from '../utils/constants/host';
import { UserType } from '../utils/types/user';

export const login = (
  username: string,
  password: string,
  handleToken: ((tokenValue: string) => void) | undefined,
) : void => {
  fetch(`${HOST}/authentication_token`, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: new Headers({ 'Content-Type': 'application/json' }),
  }).then((response) => response.json())
    .then((data) => {
      if (Object.keys(data).includes('token') && handleToken !== undefined) {
        handleToken(data.token);
      } else {
        alert('invalid credentials');
      }
    }).catch((error) => {
      console.log(error);
    });
};

export const register = (
  username: string,
  password: string,
  handleToken: ((tokenValue: string) => void) | undefined,
  handleUser: ((userValue: UserType) => void) | undefined,
) : void => {
  fetch(`${HOST}/users`, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: new Headers({ 'Content-Type': 'application/json' }),
  }).then((response) => response.json())
    .then((data) => {
      if (data['@context'] === '/contexts/ConstraintViolationList') {
        console.log('error');
      }

      if (data['@context'] === '/contexts/User' && handleUser) {
        handleUser(data);
        login(username, password, handleToken);
      }
    }).catch((error) => {
      console.log(error);
    });
};
