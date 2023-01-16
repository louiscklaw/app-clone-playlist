import * as React from 'react';

import { Box } from '@mui/material';
// import RakutenWebp from '/assets/Rakuten.webp'
// import AliceCarouselWrap from "./AliceCarouselWrap";

import AppBar from 'components/AppBar';
import BottomDownloadApp from 'components/BottomDownloadApp';
import BottomLink from 'components/BottomLink';
import BottomBreadcrumbs from 'components/BottomBreadcrumbs';
import AwardPlate from 'components/HotelInfoItem/AwardPlate';
import CovinPlate from 'components/HotelInfoItem/CovinPlate';
import FacilitiesPlate from 'components/HotelInfoItem/FacilitiesPlate';
import ResidentInfoPlate from 'components/HotelInfoItem/ResidentInfoPlate';
import SearchPlan from 'components/HotelInfoItem/SearchPlan';
import SpecialsPlate from 'components/HotelInfoItem/SpecialsPlate';
import TopPlate from 'components/HotelInfoItem/TopPlate';
import MarksAndComments from 'components/MarksAndComments';
import { useEffect } from 'react';
import { getHotelInfo } from 'pages/api/hotel_info';

export default () => {
  const [value, setValue] = React.useState(0);
  const [hotel_info, setHotelInfo] = React.useState();

  useEffect(() => {
    getHotelInfo({ hotel_id: 1 })
      .then(res => res.json())
      .then(res_json => {
        setHotelInfo(res_json[0]);
      });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (!hotel_info) return <>loading</>;

  return (
    <>
      <AppBar />
      <Box
        sx={{
          paddingLeft: { xs: '3vw', xl: '10vw' },
          paddingRight: { xs: '3vw', xl: '10vw' },
        }}
      >
        <div class="column">
          {/* <TopPlate hotel_info={hotel_info} /> */}
          {/* <SearchPlan hotel_info={hotel_info} /> */}
          <MarksAndComments hotel_info={hotel_info} />
          {/* <SpecialsPlate hotel_info={hotel_info} /> */}
          {/* <ResidentInfoPlate hotel_info={hotel_info} /> */}
          {/* <CovinPlate hotel_info={hotel_info} /> */}
          {/* <AwardPlate hotel_info={hotel_info} /> */}
          {/* <FacilitiesPlate hotel_info={hotel_info} /> */}
        </div>
      </Box>
      <BottomBreadcrumbs />
      <BottomLink />
      <BottomDownloadApp />
    </>
  );
};
