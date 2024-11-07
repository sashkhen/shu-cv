export const createDate = (date: string) =>
  new Date(date.split(".").reverse().join("."));

export const datePretty = (_date: string) => {
  const date = createDate(_date);
  const month = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
  const year = date.getFullYear();

  return `${month} ${year}`;
};

export const getDuration = (_startDate: string, _endDate?: string) => {
  const startDate = new Date(_startDate);
  const endDate = _endDate ? new Date(_endDate) : new Date();
  const diffDays =
    (endDate.getTime() - startDate.getTime()) / 1000 / 60 / 60 / 24;

  return +(Math.round((diffDays / 365) * 100) / 100).toFixed(1);
};

export default {
  createDate,
  datePretty,
  getDuration,
};
