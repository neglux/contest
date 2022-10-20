const timeFormatOptions = {
  dateStyle: "full",
};

export const timeHandler = (time = "1970-01-01T00:00:00+0000") => {
  return new Intl.DateTimeFormat("en-US", timeFormatOptions).format(
    new Date(time)
  );
};
