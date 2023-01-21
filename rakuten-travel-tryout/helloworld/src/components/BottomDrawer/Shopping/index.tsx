import React from 'react';

import { Grid, Skeleton, Typography } from '@mui/material';
import TestSvg from '../../TestSvg';
import shopping_svg from './shopping-bag-2-svgrepo-com.svg';

interface TestInterface {}

export default function Shopping() {
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
        onClick={e => {}}
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
          <img src={shopping_svg} width="50px" height="50px" />
        </div>

        <Typography variant={'body1'}>Shopping</Typography>
      </div>
    </>
  );
}
