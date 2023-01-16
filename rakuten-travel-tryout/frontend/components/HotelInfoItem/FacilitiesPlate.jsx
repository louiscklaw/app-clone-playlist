import { Box, Button, Chip, Divider, IconButton, Stack, Typography } from '@mui/material';
import CircularProgressWithLabel from 'components/CircularProgressWithLabel';
import color from 'pages/hkg/zh-hk/color';
import DoneIcon from '@mui/icons-material/Done';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import ShareIcon from '@mui/icons-material/Share';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LanguageIcon from '@mui/icons-material/Language';

export default ({ sx, hotel_info }) => {
  let { language_accept, payment_accept, facilities, hotel_type } = hotel_info;
  return (
    <>
      <div style={{ ...sx }}>
        <Stack spacing={2}>
          <Typography variant="h5" fontSize={'1.5rem'}>
            特色和設施
          </Typography>

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
                住宿設施類型
              </Typography>
              <Stack direction="row" justifyContent="flex-start" spacing={5}>
                {hotel_type.map(l => (
                  <Stack direction="row" justifyContent="center" spacing={1}>
                    <CreditCardIcon />
                    <Typography variant="body2">{l.name}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Box>

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
                住宿設施設備
              </Typography>
              <Stack direction="row" justifyContent="flex-start" spacing={5}>
                {facilities.map(l => (
                  <Stack direction="row" justifyContent="center" spacing={1}>
                    <CreditCardIcon />
                    <Typography variant="body2">{l.name}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Box>

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
                可用付款方式
              </Typography>
              <Stack direction="row" justifyContent="flex-start" spacing={5}>
                {payment_accept.map(l => (
                  <Stack direction="row" justifyContent="center" spacing={1}>
                    <CreditCardIcon />
                    <Typography variant="body2">{l.name}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Box>
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
                支援語言
              </Typography>
              <Stack direction="row" justifyContent="flex-start" spacing={5}>
                {language_accept.map(l => (
                  <Stack direction="row" justifyContent="center" spacing={1}>
                    <LanguageIcon />
                    <Typography variant="body2">{l.name}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Box>

          <Box
            sx={{
              width: '100%',
              paddingBottom: '1rem',
              paddingTop: '1rem',
              borderBottom: `3px solid ${color.lightGrey}`,
            }}
          >
            <Stack direction="column" spacing={2}>
              <Typography variant="h6" fontWeight="bold" fontSize={'1rem'}>
                住宿須知
              </Typography>
              <Typography variant="body2">如果入住時間超過預定時間，請務必與我們聯繫。</Typography>
            </Stack>
          </Box>

          <Box
            sx={{
              width: '100%',
              paddingBottom: '1rem',
              paddingTop: '1rem',
              borderBottom: `3px solid ${color.lightGrey}`,
            }}
          >
            <Stack direction="column" spacing={2}>
              <Typography variant="h6" fontWeight="bold" fontSize={'1rem'}>
                推薦景點
              </Typography>
              <Typography variant="body2">距離上野德國文化村 826m</Typography>
            </Stack>
          </Box>
        </Stack>
      </div>
    </>
  );
};
