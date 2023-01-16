import { Box, Button, Chip, Divider, IconButton, Stack, Typography } from '@mui/material';
import CircularProgressWithLabel from 'components/CircularProgressWithLabel';
import color from 'pages/hkg/zh-hk/color';
import DoneIcon from '@mui/icons-material/Done';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import ShareIcon from '@mui/icons-material/Share';
import HotelImages from './HotelImages';

export default ({ sx, hotel_info }) => {
  console.group();
  console.dir(JSON.stringify(hotel_info.awards));
  console.groupEnd();

  if (!hotel_info) return <></>;

  let { facilities, hotel_type, images: image_string } = hotel_info;
  let images = image_string.split(',');

  // let images6 = [
  //   'https://trvis.r10s.com/d/strg/ctrl/26/437b86622a9af43c03f2628882661486821b7879.47.9.26.3.jpg',
  //   'https://trvis.r10s.com/d/strg/ctrl/26/91d046af12015df16c75e62ab5eebe05154f4a0b.47.1.26.2.jpg',
  //   'https://trvis.r10s.com/d/strg/ctrl/26/91d046af12015df16c75e62ab5eebe05154f4a0b.47.1.26.2.jpg',
  //   'https://trvis.r10s.com/d/strg/ctrl/26/91d046af12015df16c75e62ab5eebe05154f4a0b.47.1.26.2.jpg',
  //   'https://trvis.r10s.com/d/strg/ctrl/26/91d046af12015df16c75e62ab5eebe05154f4a0b.47.1.26.2.jpg',
  //   'https://trvis.r10s.com/d/strg/ctrl/26/91d046af12015df16c75e62ab5eebe05154f4a0b.47.1.26.2.jpg',
  //   'https://trvis.r10s.com/d/strg/ctrl/26/91d046af12015df16c75e62ab5eebe05154f4a0b.47.1.26.2.jpg',
  //   'https://trvis.r10s.com/d/strg/ctrl/26/91d046af12015df16c75e62ab5eebe05154f4a0b.47.1.26.2.jpg',
  //   'https://trvis.r10s.com/d/strg/ctrl/26/91d046af12015df16c75e62ab5eebe05154f4a0b.47.1.26.2.jpg',
  // ];
  // let images = images6.slice(0, 6);

  return (
    <>
      <div class="row">
        <Box sx={{ flexGrow: 1 }}>
          <Stack direction="column" spacing={2}>
            <Typography variant="h6" fontWeight="bold">
              {hotel_info?.name}
            </Typography>
            <Stack direction="row" alignItems="center">
              {hotel_info.hotel_type.map(a => (
                <Chip label={a.name} />
              ))}

              {hotel_info.awards.map(a => (
                <>
                  <img src={a.image} width="auto" height="25px" />
                </>
              ))}
            </Stack>
            <Typography variant="subtitle2" fontWeight="bold" sx={{ color: color.textColor6 }}>
              {hotel_info.short_description}
            </Typography>
          </Stack>
        </Box>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </div>
      <div class="row" style={{ gap: '1rem', ...sx }}>
        <Box sx={{ width: '55%', borderRadius: '1rem' }}>
          <HotelImages images={images} />
        </Box>

        <Box
          sx={{
            border: `3px solid ${color.lightGrey}`,
            borderRadius: '1rem',
            padding: '1.1rem',
            width: '45%',
          }}
        >
          <Stack direction="column">
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <CircularProgressWithLabel
                size="5rem"
                value={5}
                thickness={5}
                sx={{ color: color.accentGreen }}
                text_sx={{ fontSize: '2rem' }}
              />
              <div>
                <Typography variant="subtitle1" fontWeight="bold">
                  5 Exceptional
                </Typography>
                <Typography variant="subtitle2" sx={{ color: color.textDeepGrey }}>
                  來自認證住客的 24 則評價
                </Typography>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ flexGrow: 1 }}></div>
              <Button>查看更多詳細資訊</Button>
            </div>
          </Stack>
          <Divider sx={{ marginTop: '1rem' }} />
          <Stack direction="column" sx={{ marginTop: '1rem' }}>
            <div>
              <Typography variant="body2" fontSize="0.8rem">
                {hotel_info.description}
              </Typography>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ flexGrow: 1 }}></div>
              <Button>查看更多詳細資訊</Button>
            </div>
          </Stack>
          <Divider sx={{ marginTop: '1rem' }} />
          <Stack direction="column">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
              <div>
                <Typography variant="subtitle1" fontWeight="bold">
                  住宿設施設備
                </Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '0.3rem', alignItems: 'baseline' }}>
                  {hotel_type.map(item => {
                    return (
                      <>
                        <DoneIcon style={{ fontSize: '1rem' }} />
                        <Typography variant="body1">{item.name}</Typography>
                      </>
                    );
                  })}
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '0.3rem', alignItems: 'baseline' }}>
                  {facilities.map(item => {
                    return (
                      <>
                        <DoneIcon style={{ fontSize: '1rem' }} />
                        <Typography variant="body1">{JSON.stringify(item.name)}</Typography>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ flexGrow: 1 }}></div>
              <Button>查看更多詳細資訊</Button>
            </div>
          </Stack>

          <Divider sx={{ marginTop: '1rem' }} />

          <Stack direction="row" spacing={3} sx={{ marginTop: '1rem' }}>
            <div
              style={{
                backgroundImage: `url('https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',

                width: '50%',
                minWidth: '150px',
                height: '200px',
                borderRadius: '1rem',
              }}
            ></div>

            <Box sx={{ padding: '1rem' }}>
              <Typography variant="subtitle1" fontWeight="bold" sx={{ color: color.textDeepGreen }}>
                {hotel_info.address}
              </Typography>
              <ul>
                <li>
                  <Typography variant="body2">{hotel_info.access}</Typography>
                </li>
              </ul>
            </Box>
          </Stack>
        </Box>
      </div>
    </>
  );
};
