import { Box, Button, Chip, Divider, IconButton, Stack, Typography } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import CommentList from 'components/HotelInfoItem/CommentList';

import MarkCircularProgress from 'components/MarkCircularProgress';
import MarkRow from 'components/MarkRow';
import color from 'pages/hkg/zh-hk/color';

const marks = {
  value: 5,
  description: 'Exceptional',
  peoples: 24,
  breakdown: {
    location: 5,
    facilities: 5,
    services: 5,
    comfort: 5,
    bath: 5,
    catering: 5,
  },
};

export default ({ sx, hotel_info }) => {
  let { comments, place, facilities_and_equipment, services_and_staff, comfort_and_cleanliness, take_a_bath, food } =
    hotel_info;

  return (
    <>
      <Stack direction="column" spacing={3}>
        <Typography variant="title2" color={color.textBlack}>
          評分和評語
        </Typography>
        <div class="row">
          <div style={{ width: '35%' }}>
            <Stack direction="column" spacing={1}>
              <div class="row" style={{ gap: '1rem', alignItems: 'center' }}>
                <MarkCircularProgress />
                <div>
                  <Typography variant="body1" fontWeight="bold" color={color.textBlack}>
                    {marks.description}
                  </Typography>
                  <Typography variant="body2" color={color.textDeepGrey}>
                    來自真實住客的 {marks.peoples} 則評語
                  </Typography>
                </div>
              </div>
              <MarkRow text={'地點'} value={place} />
              <MarkRow text={'設施與設備'} value={facilities_and_equipment} />
              <MarkRow text={'服務與工作人員'} value={services_and_staff} />
              <MarkRow text={'舒適與整潔度'} value={comfort_and_cleanliness} />
              <MarkRow text={'浴缸'} value={take_a_bath} />
              <MarkRow text={'餐食'} value={food} />
            </Stack>
          </div>
          <div style={{ width: '65%' }}>
            <pre>{JSON.stringify(comments, null, 2)}</pre>
            {[1].map((c, i) => {
              <CommentList hotel_info={hotel_info} />;
            })}
          </div>
        </div>
      </Stack>
    </>
  );
};
