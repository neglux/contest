import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      if (!resp) throw new Error("Something went wrong");
      const data = await resp.json();
      setData(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { isLoading, data };
};

export default useFetch;
