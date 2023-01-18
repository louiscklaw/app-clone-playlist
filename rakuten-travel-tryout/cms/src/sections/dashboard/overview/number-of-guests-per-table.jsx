import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import { Box, Button, Card, CardActions, Divider, Stack, SvgIcon, Typography } from '@mui/material';

export const NumberOfGuestsPerTable = props => {
  const { amount } = props;

  return (
    <Card>
      <Stack alignItems="center" direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ px: 4, py: 3 }}>
        <div>
          <img src="/assets/iconly/Activity.svg" width={48} />
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Typography color="text.secondary" variant="body2">
            テーブルごとの客数
          </Typography>
          <Typography color="text.primary" variant="h4">
            {amount}
          </Typography>
        </Box>
      </Stack>
      <Divider />
      <CardActions>
        <Button
          color="inherit"
          endIcon={
            <SvgIcon>
              <ArrowRightIcon />
            </SvgIcon>
          }
          size="small"
        >
          See all tasks
        </Button>
      </CardActions>
    </Card>
  );
};

NumberOfGuestsPerTable.propTypes = {
  amount: PropTypes.number.isRequired,
};
