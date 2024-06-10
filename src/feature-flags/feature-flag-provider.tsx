import {
    initialize,
    FeatureFlagClient,
    useFlags,
    withFLProvider,
  } from "../3rd-party-sdk/feature-flag-sdk";
  
  export enum FlagKeys {
    mercury = "mercury",
    venus = "venus",
    earth = "earth",
    mars = "mars",
  }
  
  const clientSideID = "solar-system-planets";
  
  export let client: FeatureFlagClient;
  
  async function init(ctx: { context: { key: string } }) {
    client = await initialize(clientSideID, ctx);
    return client;
  }
  
  export function useFlag<T = boolean>(key: FlagKeys): T {
    const flags = useFlags();
    return flags[key];
  }
  
  export async function getFlag<T = boolean>(key: FlagKeys): Promise<T> {
    await client.waitUntilReady();
    const flags = client.allFlags();
    return flags[key];
  }
  
  export async function getFeatureFlagProvider(ctx: {
    context: { key: string };
  }) {
    const client = await init(ctx);
    await client.waitUntilReady();
    const FeatureFlagHOC = withFLProvider({
      clientSideID,
      ctx,
      ldClient: client,
    });
  
    return FeatureFlagHOC;
  }
  