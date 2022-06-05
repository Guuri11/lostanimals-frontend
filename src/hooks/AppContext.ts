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
    handleRefreshControl?: () => void,
    coords: { latitude: number, longitude: number},
    handleCoords?: () => void,
    handleAlert?: (text:string, color:'blue' | 'red' | 'green' | 'yellow' | 'gray') => void,
    alertColor?: 'blue' | 'red' | 'green' | 'yellow' | 'gray',
    alertText?: string,
}

export const AppContext = createContext({
  token: '',
  addPost: false,
  refreshControl: false,
  coords: { latitude: 0, longitude: 0 },
});

export const useAppContext = (): AppProviderType => useContext(AppContext);

export default AppContext;
