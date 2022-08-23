import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [dataFetch, setDataFetch] = useState({
    loading: true,
    hasError: false,
    errorCode: null,
    errorMessage: null,
    data: null,
  });

  const getData = async () => {
    try {
      const { data } = await axios(url);
      setDataFetch({
        loading: false,
        hasError: false,
        errorCode: null,
        errorMessage: null,
        data,
      });
    } catch (error) {
      if (error.response) {
        setDataFetch({
          loading: false,
          hasError: true,
          errorCode: error.response.data.error.code,
          errorMessage: error.message,
          data: null,
        });
      }
      setDataFetch({
        loading: false,
        hasError: true,
        errorCode: error.response.data.error.code,
        errorMessage: error.message,
        data: null,
      });
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return dataFetch;
};

export default useFetch;
