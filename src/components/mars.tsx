import { FlagKeys, useFlag } from "../feature-flags/feature-flag-provider";

export default function Mars() {
  const marsFlag = useFlag(FlagKeys.mars);

  const WellingtonWeather = getWellyWeather();

  let selected = false;

  if (marsFlag) {
    if (WellingtonWeather === "windy") {
      selected = false;
    }

    if (WellingtonWeather === "sunny") {
      selected = true;
    }
  }

  return <div className="App">{selected && <h1>Mars</h1>}</div>;
}

function getWellyWeather() {
  const i = Math.floor(Math.random() * 2);
  return ["windy", "sunny"][i];
}
