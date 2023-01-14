import React from 'react';
import { hotel_info } from './api/hotel_info';
import { prismaHelloworld } from './api/prisma_helloworld';

export default () => {
  let [value, setValue] = React.useState({});

  React.useEffect(() => {
    hotel_info()
      .then(res => res.json())
      .then(res_json => setValue(res_json))
      .catch(err => console.error(err));
  }, []);

  if (value == {}) return <>loading</>;

  return (
    <>
      prisma_helloworld
      {JSON.stringify(value, null, 2)}
    </>
  );
};
