import { useEffect, useState } from "react";

export const useAsync = (asyncFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    asyncFunction()
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setTimeout(() => {
          setLoader(false);
        }, 2500);
        
      });
  }, dependencies);

  return {data, error, loader};
  
};
