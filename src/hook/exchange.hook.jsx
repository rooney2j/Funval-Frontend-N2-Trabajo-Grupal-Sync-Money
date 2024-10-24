import { useEffect, useMemo, useState } from "react";
import { getExchangeRates } from "../api/exchange.api";

export const useExchangeRate = ({ from = "", to = "" }) => {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    getExchangeRates(from).then((res) => {
      setRates(res);
    });
  }, [from]);

  const rate = useMemo(() => {
    if (to !== "") {
      return rates.find((item) => item.code === to)?.rate || 0;
    } else return 0;
  }, [rates, to]);

  return {
    rate,
  };
};
