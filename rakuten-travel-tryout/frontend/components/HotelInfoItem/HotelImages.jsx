import { Box, Button, Chip, Divider, IconButton, Stack, Typography } from '@mui/material';
import CircularProgressWithLabel from 'components/CircularProgressWithLabel';
import color from 'pages/hkg/zh-hk/color';
import DoneIcon from '@mui/icons-material/Done';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import ShareIcon from '@mui/icons-material/Share';
import HotelImages from './HotelImages';

export default ({ images }) => {
  let main_image = images[0];
  let sub_image = images.slice(1, 5);
  let more_image = images.slice(5, 6);

  return (
    <>
      <Stack direction="column" spacing={0.5} sx={{ height: '100%' }}>
        <Box
          sx={{
            // backgroundColor: "gold",
            backgroundImage: `url('${main_image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '1rem 1rem 0 0 ',
            flexGrow: 1,
          }}
        ></Box>
        <Stack direction="row" spacing={0.5} sx={{ height: '100px' }}>
          {sub_image.map((img, idx) => {
            if (idx == 0) {
              return (
                <Box
                  sx={{
                    backgroundImage: `url('${img}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100px',
                    width: '20%',
                    borderRadius: '0 0 0 1rem',
                  }}
                ></Box>
              );
            } else if (idx > 0) {
              return (
                <Box
                  sx={{
                    backgroundImage: `url('${img}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100px',
                    width: '20%',
                  }}
                ></Box>
              );
            }
          })}

          {more_image.map((img, idx) => {
            return (
              <Box
                sx={{
                  backgroundImage: `url('${img}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '100px',
                  width: '20%',
                  borderRadius: '0 0 1rem 0',
                }}
              >
                <div
                  style={{
                    backgroundColor: color.black50,
                    height: '100%',
                    width: '100%',

                    borderRadius: '0 0 1rem 0',

                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <InsertPhotoIcon sx={{ color: color.white, fontSize: '1rem' }} />
                  <Typography variant="caption" sx={{ color: color.white, fontSize: '0.8rem' }}>
                    瀏覽所有照片
                  </Typography>
                </div>
              </Box>
            );
          })}
        </Stack>
      </Stack>
    </>
  );
};
