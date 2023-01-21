import React from 'react';

import { Grid, Skeleton, Typography } from '@mui/material';
import TestSvg from '../../TestSvg';
import home_svg from './close-circle-svgrepo-com.svg';

interface TestInterface {
  toggleDrawer(s: string, b: boolean): void;
}

export default function CloseButton(props: TestInterface) {
  let { toggleDrawer } = props;

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
        onClick={e => {
          toggleDrawer('bottom', false);
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
          <img src={home_svg} width="50px" height="50px" />
        </div>

        <Typography variant={'body1'}>Close</Typography>
      </div>
    </>
  );
}
