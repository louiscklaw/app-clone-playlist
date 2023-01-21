import React from 'react';

import { Grid, Skeleton, Typography } from '@mui/material';
import TestSvg from '../../TestSvg';
import hotel_svg from './hotel-building-svgrepo-com.svg';
import { useIonRouter, IonButton, IonItem, IonRouterLink } from '@ionic/react';

interface TestInterface {}

export default function Hotel() {
  return (
    <>
      <IonRouterLink routerLink="/ServiceHome">
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
            <img src={hotel_svg} width="50px" height="50px" />
          </div>

          <Typography variant={'body1'}>Hotel</Typography>
        </div>
      </IonRouterLink>
    </>
  );
}
