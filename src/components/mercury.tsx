import { FlagKeys, useFlag } from "../feature-flags/feature-flag-provider";

export default function Mercury() {
  const mercuryFlag = useFlag(FlagKeys.mercury);

  let selected = false;

  const mercuryPublicHolidayDate = "2024-6-1";

  if (mercuryFlag === true) {
    if (new Date() > new Date(mercuryPublicHolidayDate)) {
      selected = true;
    } else {
      selected = false;
    }
  }

  return <div className="App">{selected && <h1>Mercury</h1>}</div>;
}
