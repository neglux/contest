export const dataHandler = (data) => {
  const isAnyNullish = (cont) =>
    !(
      cont.name &&
      cont.url &&
      cont.site &&
      cont["start_time"] &&
      cont["end_time"]
    );

  return data.map((cont) => {
    if (isAnyNullish(cont)) return undefined;

    const startTime = new Date(cont["start_time"]).getTime();
    const endTime = new Date(cont["end_time"]).getTime();
    const now = Date.now();

    return {
      name: cont.name,
      url: cont.url,
      site: cont.site,
      isActive: now > startTime && now < endTime,
      isUpcoming: now < startTime,
      startTime,
      endTime,
    };
  });
};
