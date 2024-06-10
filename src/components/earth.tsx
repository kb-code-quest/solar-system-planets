import { FlagKeys, useFlag } from "../feature-flags/feature-flag-provider";

export default function Earth() {
  const earthFlag = useFlag(FlagKeys.earth);

  const WellingtonWeather = getWellyWeather();

  let selected = false;

  if (earthFlag) {
    if (WellingtonWeather === "windy") {
      selected = false;
    }

    if (WellingtonWeather === "sunny") {
      selected = true;
    }
  }

  return <div className="App">{selected && <h1>Earth</h1>}</div>;
}

function getWellyWeather() {
  const i = Math.floor(Math.random() * 2);
  return ["windy", "sunny"][i];
}
