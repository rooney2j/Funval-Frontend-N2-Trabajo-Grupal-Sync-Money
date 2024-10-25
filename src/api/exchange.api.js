import axios from "axios";

/**
 *
 * @param {String[]} codes
 * @returns {{name: string, code: string}[]}
 */
export const getExchangeCodes = (codes = []) => {
  return axios
    .get("https://v6.exchangerate-api.com/v6/7cba0df1f390b3b9eda34fce/codes")
    .then((res) => {
      return res.data.supported_codes
        .filter((item) => codes.includes(item[0]))
        .map((item) => ({
          code: item[0],
          name: item[1],
        }));
    })
    .catch((err) => {
      return [];
    });
};

export const getExchangeRates = (code) => {
  return axios
    .get(
      `https://v6.exchangerate-api.com/v6/7cba0df1f390b3b9eda34fce/latest/${code}`
    )
    .then((res) => {
      return Object.entries(res.data.conversion_rates).map((item) => ({
        code: item[0],
        rate: item[1],
      }));
    })
    .catch((err) => {
      return [];
    });
};
