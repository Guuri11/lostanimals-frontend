import { HOST } from '../utils/constants/host';
import { UserType } from '../utils/types/user';

export const getMe = async (token: string): Promise<UserType> => {
  const userResponse = await fetch(`${HOST}/users/me`, {
    headers: new Headers({
      'Content-Type': 'application/json+ld',
      Authorization: `Bearer ${token}`,
    }),
  });
  return userResponse.json();
};

export const login = (
  username: string,
  password: string,
  handleToken: ((tokenValue: string) => void) | undefined,
  handleUser: ((userValue: UserType) => void) | undefined,
) : void => {
  fetch(`${HOST}/authentication_token`, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: new Headers({ 'Content-Type': 'application/json' }),
  }).then((response) => response.json())
    .then(async (data) => {
      if (Object.keys(data).includes('token') && handleToken && handleUser) {
        handleToken(data.token);
        const me = await getMe(data.token);
        handleUser(me);
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
        login(username, password, handleToken, handleUser);
      }
    }).catch((error) => {
      console.log(error);
    });
};

export const checkToken = async (token: string): Promise<boolean> => (async () => {
  const result = await fetch(HOST, {
    headers: new Headers({
      'Content-Type': 'application/json+ld',
      Authorization: `Bearer ${token}`,
    }),
  });

  return result.status === 200;
})();
