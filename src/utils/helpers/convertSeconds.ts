export function convertSeconds(seconds: string) {
  let toNumber = Number(seconds);
  const minute = Math.floor(toNumber / 60);
  const second = toNumber % 60;

  return `${minute}:${second}`;
}
