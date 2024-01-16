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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState(initialValue);

  const sendRequest = useCallback(
    async (data) => {
      try {
        setIsLoading(true);
        const responseData = await sendHttpRequest({
          url,
          config: { ...config, body: data },
        });
        if (!responseData) {
          throw new Error('Request failed!');
        }
        setError(null);
        setData(responseData);
      } catch (error) {
        console.log('error', error);
        setError(error.message || 'Something went wrong!');
      } finally {
        setIsLoading(false);
      }
    },
    [config, url]
  );

  useEffect(() => {
    if ((config && (config.method === 'GET' || !config.method)) || !config) {
      sendRequest();
    }
  }, [config, sendRequest]);

  return {
    isLoading,
    error,
    data,
    sendRequest,
  };
};

export default useHttp;
