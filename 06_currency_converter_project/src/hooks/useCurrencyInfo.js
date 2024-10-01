import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  
  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res); // Check the API response structure
        setData(res.rates); // Set data as the exchange rates object
      })
      .catch((error) => console.error("Error fetching data:", error)); // Log any errors
  }, [currency]);

  // Log the updated data
  useEffect(() => {
    console.log("Updated data:", data);
  }, [data]);

  return data;
}

export default useCurrencyInfo;
