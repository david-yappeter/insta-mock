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
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });

    // eslint-disable-next-line
  }, []);

  return { data, loading, error };
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
