export const transformDateFormat = (date: string) => {
  if (!date) {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();
    return `${day}/${month}/${year}`;
  }

  const parts = date.split(/\D/); 
  
  if (parts[2].length === 2) {
    parts[2] = '20' + parts[2];
  }

  const day = parts[0].padStart(2, '0');
  const month = parts[1].padStart(2, '0');

  return `${day}/${month}/${parts[2]}`;
};
