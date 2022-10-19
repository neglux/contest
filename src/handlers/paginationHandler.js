export const paginationHandler = (data) => {
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(data.length / itemsPerPage);

  return Array.from({ length: numberOfPages }, (_, i) => {
    const start = i * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  });
};
