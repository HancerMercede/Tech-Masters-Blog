export const DateFormatter = ({ date }) => {
  const formatter = new Intl.DateTimeFormat("es-do", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const fomattedDate = formatter.format(date);
  return fomattedDate;
};
