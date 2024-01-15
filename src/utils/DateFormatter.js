export const DateFormatter = (date) => {
  if (!date) return null;
  const formatter = new Intl.DateTimeFormat("en-us", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "hour",
  });
  const fomattedDate = formatter.format(date);
  return fomattedDate;
};
