export const getDayLabel = (timestamp) => {
  const inputDate = new Date(timestamp * 1000);
  const today = new Date();

  const inputDateCopy = new Date(inputDate);
  inputDateCopy.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const dayDiff = Math.floor((inputDateCopy - today) / (1000 * 60 * 60 * 24));

  let label;
  if (dayDiff === 0) label = "Today";
  else if (dayDiff === 1) label = "Tomorrow";
  else label = inputDate.toLocaleDateString("en-US", { weekday: "short" });

  const time = inputDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return {time, label};
};
