export const transformDateFormat = (date: string) => {
  const parts = date.split(/\.|\/|:|;/);

  if (parts[2].length === 2) {
    parts[2] = '20' + parts[2];
  }

  return `${parts[1]}/${parts[0]}/${parts[2]}`;
};
