import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

import { Post as PostType } from '../models/post';

const options: AxiosRequestConfig = {
  method: 'GET',
  url: 'https://v2.jokeapi.dev/joke/Any',
  params: {
    blacklistFlags: 'nsfw',
    type: 'single',
    amount: '10',
  },
};

const useData = (): [PostType[], boolean, boolean] => {
  const [postData, setPostData] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios.request(options).then((response) => {
      setPostData(response.data.jokes);
      setIsLoading(false);
    }).catch((error) => {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    });
  }, []);

  return [postData, isLoading, isError];
};

export default useData;
