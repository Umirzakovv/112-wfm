export function switchTitle(type: string) {
  switch (type) {
    case "default":
      return "При выборе раздела выше, тут отобразится соответсвующая информация";
    case "В очереди":
      return "В очереди";
    case "В сети":
      return "В сети";
    case "В работе":
      return "В работе";
    case "Свободные":
      return "Свободные";
    case "Заблокированные":
      return "Заблокированные";
  }
}
