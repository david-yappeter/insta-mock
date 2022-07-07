import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import { mockPost } from "../../pages/Post/__mocks__/mockPost";

const axiosMockInstance = axios.create();
const axiosLiveInstance = axios.create();
export const axiosInstance = process.env.REACT_APP_IS_AXIOS_MOCK
  ? axiosMockInstance
  : axiosLiveInstance;

const AxiosContext = createContext();

export const useAxios = (config) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const axios = useContext(AxiosContext);

  useEffect(() => {
    setLoading(true);
    axios
      .request(config)
      .then((resp) => {
        const { data } = resp;
        setData(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });

    // eslint-disable-next-line
  }, []);

  return { data, loading, error };
};

export const useLazyAxios = (config) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [called, setCalled] = useState(false);
  const axios = useContext(AxiosContext);

  const lazyRequest = (overwriteConfig) => {
    setLoading(true);
    axios
      .request({ ...(config || {}), ...(overwriteConfig || {}) })
      .then((resp) => {
        const { data } = resp;
        setData(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
        setCalled(true);
      });
  };

  const fetchMore = (appendLogic, overwriteConfig) => {
    if (
      appendLogic === undefined ||
      appendLogic === null ||
      typeof appendLogic !== "function"
    ) {
      throw Error("Fetch More Required (existing, incoming) => { return data}");
    }
    setLoading(true);
    axios
      .request({ ...(config || {}), ...(overwriteConfig || {}) })
      .then((resp) => {
        const { data } = resp;
        setData((prev) => appendLogic(prev, data));
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return [lazyRequest, { data, loading, error, called, fetchMore }];
};

export const AxiosProvider = ({ children }) => {
  mockPost();

  return (
    <AxiosContext.Provider value={axiosInstance}>
      {children}
    </AxiosContext.Provider>
  );
};

export const axiosMockAdapterInstance = new AxiosMockAdapter(
  axiosMockInstance,
  { delayResponse: 0 }
);
