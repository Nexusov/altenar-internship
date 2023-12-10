export const transformDateFormat = (date: string) => {
  if (!date) {
    const currentDate = new Date();
    const day = currentDate.getDate().toString();
    const month = (currentDate.getMonth() + 1).toString();
    const year = currentDate.getFullYear();
    return `${day}/${month}/${year}`;
  }

  const parts = date.split(/\.|\/|:|;/);

  if (parts[2].length === 2) {
    parts[2] = '20' + parts[2];
  }

  return `${parts[1]}/${parts[0]}/${parts[2]}`;
};
