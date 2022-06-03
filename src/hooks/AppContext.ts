/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { UserType } from '../utils/types/user';

type AppProviderType = {
    token: string | null,
    user?: UserType | null,
    handleToken?: (tokenValue: string) => void,
    handleUser?: (UserValue: UserType | null) => void,
    navigate?: NavigateFunction,
    addPost: boolean,
    handleAddPost?: () => void,
    refreshControl: boolean,
    handleRefreshControl?: () => void
}

export const AppContext = createContext({
  token: '',
  addPost: false,
  refreshControl: false,
});

export const useAppContext = (): AppProviderType => useContext(AppContext);

export default AppContext;
