import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

import { Post as PostType } from '../models/post';

const useSingleData = (id: undefined | number): [PostType | undefined, boolean, boolean] => {
  const [postSingleData, setPostSingleData] = useState<PostType>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const options: AxiosRequestConfig = {
      method: 'GET',
      url: 'https://v2.jokeapi.dev/joke/Any',
      params: {
        blacklistFlags: 'nsfw',
        type: 'single',
        idRange: id,
      },
    };

    const fetchData = async () => {
      await axios.request(options).then((response) => {
        setPostSingleData(response.data);
        setIsLoading(false);
      }).catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });
    };

    fetchData();
  }, [id]);
  return [postSingleData, isLoading, isError];
};

export default useSingleData;
