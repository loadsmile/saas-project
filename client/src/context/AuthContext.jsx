import { createContext } from 'react';

export const AuthContext = createContext({
  user: null,
  loading: true,
  signUp: async () => {},
  login: async () => {},
  logout: async () => {},
  googleSignIn: async () => {},
  resetPassword: async () => {}
});
