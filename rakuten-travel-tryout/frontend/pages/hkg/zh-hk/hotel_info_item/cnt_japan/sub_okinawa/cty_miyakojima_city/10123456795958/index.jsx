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
  const [hotel_info, setHotelInfo] = React.useState({});

  useEffect(() => {
    getHotelInfo({ hotel_id: 1 })
      .then(res => res.json())
      .then(res_json => {
        console.log('helloworld');
        setHotelInfo(res_json[0]);
      });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (hotel_info === {}) return <>loading</>;

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
          <TopPlate sx={{}} hotel_info={hotel_info} />
          {/* <SearchPlan style={{ display: 'none' }} /> */}
          {/* <MarksAndComments style={{ display: 'none' }} /> */}
          {/* <SpecialsPlate style={{ display: 'none' }} /> */}
          {/* <ResidentInfoPlate style={{ display: 'none' }} /> */}
          {/* <CovinPlate style={{ display: 'none' }} /> */}
          {/* <AwardPlate style={{ display: 'none' }} /> */}
          {/* <FacilitiesPlate style={{ display: 'none' }} /> */}
        </div>
      </Box>
      <BottomBreadcrumbs />
      <BottomLink />
      <BottomDownloadApp />
    </>
  );
};
