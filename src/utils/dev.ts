export const IS_LOCAL_DEV = import.meta.env.NODE_ENV === 'development';

export const IS_NOT_LOCAL_DEV = !IS_LOCAL_DEV;

export const devLog = (...params: unknown[]) => {
  // eslint-disable-next-line no-console
  console.info(...params);
};
