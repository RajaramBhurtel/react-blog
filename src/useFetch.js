//creating a custom hook named useFetch 
//to create a custom hook the name must start from use keyword

import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(true); 

    useEffect(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error("Couldn`t fetch data from the server");
          }
          return response.json();
        })
        .then((data) => {
          // console.log(data);
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, [url]);

    return {data, isPending, error }
}
 
export default useFetch;