import React from 'react';
import { getHotelInfo, getHotelInfos } from './api/hotel_info';
import { prismaHelloworld } from './api/prisma_helloworld';

export default () => {
  let [hotel_info, setHotelInfo] = React.useState({});
  let [hotel_infos, setHotelInfos] = React.useState({});

  React.useEffect(() => {
    let hotel_id = 1;
    getHotelInfo({ hotel_id })
      .then(res => res.json())
      .then(res_json => setHotelInfo(res_json))
      .catch(err => console.error(err));

    getHotelInfos()
      .then(res => res.json())
      .then(res_json => setHotelInfos(res_json))
      .catch(err => console.error(err));
  }, []);

  if (hotel_info == {}) return <>loading</>;

  return (
    <>
      prisma_helloworld
      {JSON.stringify(hotel_info, null, 2)}
      {JSON.stringify(hotel_infos, null, 2)}
    </>
  );
};
