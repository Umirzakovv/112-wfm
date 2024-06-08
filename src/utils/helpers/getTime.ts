export function getTime(date: string) {
  const hour = date.slice(11, 13);
  const minute = date.slice(14, 16);
  const seconds = date.slice(17, 19);
  return `${hour}:${minute}:${seconds}`;
}
