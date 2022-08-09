import axios from "axios";

const THREE_MINUTES = 3 * 60 * 1000;
const baseURL = "https://api.punkapi.com/v2/";
const baseConfig = { baseURL, timeout: THREE_MINUTES };

/**
 * Axios HTTP Client
 * {@link https://github.com/axios/axios#request-config Axios Request Config}
 */
export const httpClient = {
  get: (url, config) =>
    axios.get(url, {
      ...baseConfig,
      ...config,
    }),
};

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
