function switchMonth(month: string) {
  switch (month) {
    case "Jan":
      return "01";
    case "Feb":
      return "02";
    case "Mar":
      return "03";
    case "Apr":
      return "04";
    case "May":
      return "05";
    case "Jun":
      return "06";
    case "Jul":
      return "07";
    case "Aug":
      return "08";
    case "Sep":
      return "09";
    case "Oct":
      return "10";
    case "Nov":
      return "11";
    case "Dec":
      return "12";

    default:
      return null;
  }
}

export function correctDate(date: string) {
  const day = date.slice(8, 10);
  const month = switchMonth(date.slice(4, 7));
  const year = date.slice(11, 15);
  return `${day}.${month}.${year}`;
}
