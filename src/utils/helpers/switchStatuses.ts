export function switchStatuses(status: string) {
  switch (status) {
    // case "all":
    //   return "all";
    // case "exceeding-time":
    //   return "all";
    // case "block-to-block":
    //   return "all";
    case "latecomers":
      return "stay_up_late";
    case "left-early":
      return "left_work_early";
    case "work-less-nine-hours":
      return "worked_less";
    case "absence":
      return "not_at_work";
  }
}
