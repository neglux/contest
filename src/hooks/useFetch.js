import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(false);
  const [data, setData] = useState([]);
  const fetchData = async (url) => {
    try {
      const resp = await fetch(url);
      if (!resp.ok) throw new Error("Oops! Something went wrong..");

      const data = await resp.json();
      if (data) setData(data);

      setIsLoading(false);
    } catch (err) {
      setErrorMsg(err.message);
      setData(null);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { isLoading, data, errorMsg };
};

export default useFetch;
