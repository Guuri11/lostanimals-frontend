/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { UserType } from '../utils/types/user';

type AppProviderType = {
    token: string | null,
    user?: UserType | null,
    handleToken?: (tokenValue: string) => void,
    handleUser?: (UserValue: UserType | null) => void,
    navigate?: NavigateFunction
}

export const AppContext = createContext({
  token: '',
});

export const useAppContext = (): AppProviderType => useContext(AppContext);

export default AppContext;
