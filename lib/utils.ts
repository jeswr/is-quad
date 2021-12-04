/* eslint-disable no-unused-vars */
export function asFactory<T, K extends T>(func: (arg: T) => arg is K): (arg: T) => K {
  return (arg: T) => {
    if (!func(arg)) {
      throw new Error(`Failed casting ${arg} to correct type`);
    }
    return arg;
  };
}
