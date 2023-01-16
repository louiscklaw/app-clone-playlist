import { Box, Button, Chip, Divider, IconButton, Stack, Typography } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import CommentList from 'components/HotelInfoItem/CommentList';

import MarkCircularProgress from 'components/MarkCircularProgress';
import MarkRow from 'components/MarkRow';
import color from 'pages/hkg/zh-hk/color';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: color.accentGreen,
  },
}));

export default ({ text, value }) => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="body1">{text}</Typography>
        <Typography variant="body1">{JSON.stringify(value)}</Typography>
      </Stack>
      <BorderLinearProgress variant="determinate" value={(value / 5) * 100} />
    </>
  );
};
