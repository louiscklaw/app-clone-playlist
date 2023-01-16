import { Box, Button, Chip, Divider, IconButton, Stack, Typography } from '@mui/material';
import CircularProgressWithLabel from 'components/CircularProgressWithLabel';
import color from 'pages/hkg/zh-hk/color';
import DoneIcon from '@mui/icons-material/Done';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import ShareIcon from '@mui/icons-material/Share';
import CreditCardIcon from '@mui/icons-material/CreditCard';

export default ({ sx, hotel_info }) => {
  let { awards } = hotel_info;

  return (
    <>
      <div {...sx}>
        <Box
          sx={{
            width: '100%',
            paddingBottom: '1rem',
            paddingTop: '1rem',
            borderBottom: `3px solid ${color.lightGrey}`,
          }}
        >
          <Stack direction="column" spacing={2} sx={{ width: '100%' }}>
            <Typography variant="h6" fontWeight="bold" fontSize={'1rem'}>
              獎項
            </Typography>
            <Stack direction="row" justifyContent="flex-start" spacing={5}>
              {awards.map(a => (
                <Stack direction="row" justifyContent="center" spacing={1}>
                  <img src={a.image} width="auto" height="30px" />
                  {/* <Typography variant="body2">{a.name}</Typography> */}
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Box>
      </div>
    </>
  );
};
