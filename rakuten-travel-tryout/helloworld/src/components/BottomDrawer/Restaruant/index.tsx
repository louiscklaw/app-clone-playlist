import React from 'react';

import { Grid, Skeleton, Typography } from '@mui/material';
import TestSvg from '../../TestSvg';
import restaurant_svg from './restaurant-waiter-svgrepo-com.svg';
import { useIonRouter, IonButton, IonRouterLink } from '@ionic/react';

interface TestInterface {}

export default function Restaurant() {
  let route = useIonRouter();
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
          route.push('/Restaurant');
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
          <img src={restaurant_svg} width="50px" height="50px" />
        </div>

        <Typography variant={'body1'}>Restaurant</Typography>
      </div>
    </>
  );
}
