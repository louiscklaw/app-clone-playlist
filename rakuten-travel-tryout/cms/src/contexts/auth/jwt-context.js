import { createContext, useCallback, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { authApi } from '../../api/auth';
import { Issuer } from '../../utils/auth';
import postData from './postData';
import toast from 'react-hot-toast';

const STORAGE_KEY = 'accessToken';

var ActionType;
(function (ActionType) {
  ActionType['INITIALIZE'] = 'INITIALIZE';
  ActionType['SIGN_IN'] = 'SIGN_IN';
  ActionType['SIGN_UP'] = 'SIGN_UP';
  ActionType['SIGN_OUT'] = 'SIGN_OUT';
})(ActionType || (ActionType = {}));

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  SIGN_IN: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  SIGN_UP: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  SIGN_OUT: state => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
};

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);

export const AuthContext = createContext({
  ...initialState,
  issuer: Issuer.JWT,
  signIn: () => Promise.resolve(),
  signUp: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
});

export const AuthProvider = props => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(async () => {
    try {
      const accessToken = globalThis.localStorage.getItem(STORAGE_KEY);

      if (accessToken) {
        const user = await authApi.me({ accessToken });

        dispatch({
          type: ActionType.INITIALIZE,
          payload: {
            isAuthenticated: true,
            user,
          },
        });
      } else {
        dispatch({
          type: ActionType.INITIALIZE,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    } catch (err) {
      console.error(err);
      dispatch({
        type: ActionType.INITIALIZE,
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  }, [dispatch]);

  useEffect(
    () => {
      initialize();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const signIn = useCallback(
    async (email, password) => {
      // const { accessToken } = await authApi.signIn({ email, password });

      const { msg, user, accessToken } = await postData('//localhost:3001/login', { email, password });

      // const user = await authApi.me({ accessToken });

      if (!accessToken) console.error('accessToken not exist');

      localStorage.setItem(STORAGE_KEY, accessToken);

      // console.dir({ user, accessToken });

      //   user = {
      //     "id": "5e86809283e28b96d2d38537",
      //     "avatar": "/assets/avatars/avatar-anika-visser.png",
      //     "email": "demo@devias.io",
      //     "name": "Anika Visser",
      //     "plan": "Premium"
      // }

      console.log({ msg });

      if (msg == 'login ok') {
        dispatch({
          type: ActionType.SIGN_IN,
          payload: {
            user,
          },
        });
      } else {
        toast.error('login result error');
      }
    },
    [dispatch],
  );

  const signUp = useCallback(
    async (email, name, password) => {
      let result = await postData(`//localhost:3001/signup`, {
        email,
        name,
        password,
      });

      // const { accessToken } = await authApi.signUp({ email, name, password });
      // const user = await authApi.me({ accessToken });
      // localStorage.setItem(STORAGE_KEY, accessToken);

      let { user } = result;
      //   {
      //     "user": {
      //         "id": "af6544ef9285be3e0405dc87",
      //         "email": "123@123.com",
      //         "name": "test create",
      //         "plan": "Standard"
      //     }
      // }
      // console.dir({ user });
      // debugger;

      dispatch({
        type: ActionType.SIGN_UP,
        payload: { user },
      });
    },
    [dispatch],
  );

  const signOut = useCallback(async () => {
    console.log('sign out ?');
    // debugger;

    localStorage.removeItem(STORAGE_KEY);
    dispatch({ type: ActionType.SIGN_OUT });
  }, [dispatch]);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        issuer: Issuer.JWT,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const AuthConsumer = AuthContext.Consumer;
