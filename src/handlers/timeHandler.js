const timeFormatOptions = {
  dateStyle: "full",
};

export const timeHandler = (time) => {
  return new Intl.DateTimeFormat("en-US", timeFormatOptions).format(
    new Date(time)
  );
};
