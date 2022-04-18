import { createContext, useContext } from 'react';

type AppProviderType = {
    token: string | null,
    user: string | null
}

export const AppContext = createContext({
  token: null,
  user: null,
});

export const useAppContext = (): AppProviderType => useContext(AppContext);

export default AppContext;
