export const changeDateFormat = (date: string) => {
  const newDate = new Date(date);

  return newDate.toLocaleDateString("es-CL", {});
};
