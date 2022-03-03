import { useState } from 'react';

const useView = (): [boolean, () => void] => {
  const [fullView, setFullView] = useState(false);

  const changeViewHandler = () => {
    setFullView(!fullView);
  };

  return [fullView, changeViewHandler];
};

export default useView;
