export const statusHandler = (isActive, isUpcoming) => {
  if (isActive) return "Active";
  if (isUpcoming) return "Upcoming";
};
