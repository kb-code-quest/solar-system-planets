import { FlagKeys, useFlag } from "../feature-flags/feature-flag-provider";

export default function Venus() {
  const venusFlag = useFlag(FlagKeys.venus);

  let selected = venusFlag && throwADice(8) === 3;

  return <div className="App">{selected && <h1>Venus</h1>}</div>;
}

function throwADice(max: number) {
  return Math.floor(Math.random() * max);
}
