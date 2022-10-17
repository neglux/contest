import { useEffect, useState } from "react";
import { timeout } from "../utilities/timeout";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(false);
  const [data, setData] = useState([]);
  const fetchData = async (url) => {
    try {
      const resp = await Promise.race([fetch(url), timeout(30)]);
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
