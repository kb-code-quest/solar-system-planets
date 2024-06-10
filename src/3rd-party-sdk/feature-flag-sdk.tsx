import React, { createContext } from "react";

export interface FeatureFlagClient {
  waitUntilReady: () => Promise<boolean>;
  allFlags: () => FlagSet;
}

export interface FlagSet {
  [key: string]: any;
}

export const initialize = async (
  clientSideID: string,
  ctx: { context: { key: string } }
): Promise<FeatureFlagClient> => {
  return {
    waitUntilReady: async () =>
      await new Promise<boolean>((resolve, reject) => {
        setTimeout(() => {
          resolve(true);
        }, 100);
      }),
    allFlags: () => flagSetStub,
  };
};

export const useFlags = () => flagSetStub;

const FLContext = createContext<any>(null);

export const withFLProvider = <T extends JSX.IntrinsicAttributes = {}>(
  config: any
): ((WrappedComponent: React.ComponentType<T>) => React.ComponentType<T>) => {
  return function hoc(Wrapped: React.ComponentType<T>): React.ComponentType<T> {
    function HoistedComponent(props: T) {
      return (
        <FLContext.Provider {...config}>
          <Wrapped {...props} />
        </FLContext.Provider>
      );
    }

    return HoistedComponent;
  };
};

const flagSetStub: FlagSet = {
  mercury: true,
  venus: true,
  earth: true,
  mars: true,
};
