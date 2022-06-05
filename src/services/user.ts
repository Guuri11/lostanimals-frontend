import { HOST } from '../utils/constants/host';
import { UserType } from '../utils/types/user';

export const getMe = async (token: string): Promise<UserType> => {
  const userResponse = await fetch(`${HOST}/users/me`, {
    headers: new Headers({
      'Content-Type': 'application/ld+json',
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
  handleAlert: ((text: string, color: 'blue' | 'red' | 'green' | 'yellow' | 'gray') => void) | undefined,
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
      } else if (handleAlert) {
        handleAlert('Invalid credentials', 'red');
      }
    }).catch((error) => {
      if (handleAlert) {
        handleAlert(error, 'red');
      }
    });
};

export const register = (
  username: string,
  password: string,
  handleToken: ((tokenValue: string) => void) | undefined,
  handleUser: ((userValue: UserType) => void) | undefined,
  handleAlert: ((text: string, color: 'blue' | 'red' | 'green' | 'yellow' | 'gray') => void) | undefined,
) : void => {
  fetch(`${HOST}/users`, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: new Headers({ 'Content-Type': 'application/json' }),
  }).then((response) => response.json())
    .then((data) => {
      if (data['@context'] === '/contexts/ConstraintViolationList' && handleAlert) {
        handleAlert('Error on register', 'red');
      }

      if (data['@context'] === '/contexts/User' && handleUser) {
        login(username, password, handleToken, handleUser, handleAlert);
      }
    }).catch((error) => {
      if (handleAlert) {
        handleAlert(error, 'red');
      }
    });
};

export const checkToken = async (token: string): Promise<boolean> => (async () => {
  const result = await fetch(HOST, {
    headers: new Headers({
      'Content-Type': 'application/ld+json',
      Authorization: `Bearer ${token}`,
    }),
  });

  return result.status === 200;
})();
