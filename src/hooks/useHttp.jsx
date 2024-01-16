import { useState, useEffect, useCallback } from 'react';

const sendHttpRequest = async ({ url, config }) => {
  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      throw new Error(response.statusText || 'Request failed!');
    }
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    throw new Error(error.message || 'Request failed!');
  }
};

const useHttp = ({ url, config, initialValue }) => {
  // If we don't use persistConfig, the useEffect will run infinitely
  // Because the config object is a new object every time the component re-renders
  const [persistConfig, setPersistConfig] = useState({
    method: 'GET',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(initialValue);
  console.log(url, config);

  const sendRequest = useCallback(async () => {
    setPersistConfig(config);
    try {
      setIsLoading(true);
      setError(null);
      const responseData = await sendHttpRequest({ url, persistConfig });
      if (!responseData) {
        throw new Error('Request failed!');
      }
      setData(responseData);
      console.log(responseData);
    } catch (error) {
      setError(error.message || 'Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  }, [config, persistConfig, url]);

  useEffect(() => {
    console.log('Checking config');
    if ((config && (config.method === 'GET' || !config.method)) || !config) {
      sendRequest();
    }
    return () => {
      setIsLoading(false);
      setError(null);
    };
  }, [config, sendRequest]);

  return {
    isLoading,
    error,
    data,
    sendRequest,
  };
};

export default useHttp;
