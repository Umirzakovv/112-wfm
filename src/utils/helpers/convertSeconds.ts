export function convertSeconds(value: string) {
  let toNumber = Number(value);
  const hours = Math.floor(toNumber / 3600);
  const minutes = Math.floor(toNumber / 60) - hours * 60;
  const seconds = toNumber % 60;

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

convertSeconds("4697");
