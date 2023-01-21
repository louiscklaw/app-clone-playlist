import * as React from 'react';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { Grid, Skeleton, Typography } from '@mui/material';

import TestSvg from '../TestSvg';
import CloseButton from './Close';
import Restaurant from './Restaruant';
import Hotel from './Hotel';
import Shopping from './Shopping';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const IconClose = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '1rem',
        }}
        onClick={e => alert('helloworld')}
      >
        <div
          style={{
            width: '66px',
            height: '66px',
            padding: '5',

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TestSvg />
        </div>

        <Typography variant={'body1'}>Close</Typography>
      </div>
    </>
  );
};

const IconTest = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '1rem',
        }}
      >
        <div
          style={{
            width: '66px',
            height: '66px',
            padding: '5',

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TestSvg />
        </div>

        <Typography variant={'body1'}>項目１</Typography>
      </div>
    </>
  );
};

const StyledBox = styled(Box)(({ theme }) => ({
  // backgroundColor: '#fcfcfc',
  // backgroundColor: 'cyan',
}));

export default function BottomDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const testDrawer = (anchor: Anchor, open: boolean) => {
    setState({ ...state, [anchor]: open });
  };

  const anchor = 'bottom';

  return (
    <>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        PaperProps={{
          sx: {
            borderRadius: '1rem 1rem 0 0',
          },
        }}
      >
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
            paddingTop: '2rem',
            borderRadius: '1rem 1rem 0 0',
          }}
        >
          <Grid container>
            <Grid item xs={4}>
              <Shopping />
            </Grid>
            <Grid item xs={4}>
              <Hotel />
            </Grid>
            <Grid item xs={4}>
              <Restaurant />
            </Grid>
            <Grid item xs={12}>
              <CloseButton toggleDrawer={testDrawer} />
            </Grid>
          </Grid>
        </StyledBox>
      </Drawer>

      <div id="helloworld" style={{ zIndex: 1300, position: 'fixed', bottom: '1rem', left: 'calc( 50vw - 75px / 2 )' }}>
        <div
          onClick={toggleDrawer(anchor, true)}
          style={{
            width: '75px',
            height: '75px',
            backgroundColor: 'tomato',
            borderRadius: '50px',
            cursor: 'pointer',

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TestSvg />
        </div>
      </div>
    </>
  );
}
