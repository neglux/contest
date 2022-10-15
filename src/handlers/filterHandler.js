export const filterHandler = (data, filter) => {
  return data.filter((cont) => {
    if (filter === "active") {
      return cont.isActive;
    } else if (filter === "upcoming") {
      return cont.isUpcoming;
    } else return true;
  });
};
