export const Routes = {
  PUBLIC: {
    LOGIN: 'Login',
    REGISTER: 'Register',
    FORGOT_PASSWORD: 'ForgotPassword',
  },
  PRIVATE: {
    HOME: 'Home',
    PROFILE: 'Profile',
    LESSONS: 'Lessons',
  },
} as const;

type ValueOf<T> = T[keyof T];