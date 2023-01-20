import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cog, flash, list } from 'ionicons/icons';

import Home from '../Feed';
import Lists from '../Lists';
import ListDetail from '../ListDetail';
import Settings from '../Settings';
import { useTranslation } from 'react-i18next';
import { IonText } from '@ionic/react';
import { warning } from 'ionicons/icons';

import ErrorSvg from './error.svg';

const BrokenLink = () => {
  const { t } = useTranslation();

  return (
    <>
      <div
        style={{
          height: '100vh',
          // backgroundImage: `linear-gradient(0deg,  #3f87a6, #ebf8e1,url("https://source.unsplash.com/random/900x700/?lobby")`,
          // backgroundImage:
          // 'linear-gradient(0.25turn, #3f87a6, #ebf8e1, url("https://images.unsplash.com/photo-1599392687131-d82ad47a871f"))',
          backgroundImage: 'url("https://images.unsplash.com/photo-1599392687131-d82ad47a871f")',

          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(128,0,0,0.5)',
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundImage: 'url(' + ErrorSvg.src + ')',
              height: '50vw',
              width: '50vw',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          ></div>

          <IonText style={{ color: '#ffffff' }}>
            <h1>{t('Sorry')}</h1>
          </IonText>
          <IonText style={{ color: '#ffffff' }}>
            <p>{t('This restaurant is no longer subscribed to our service.')}</p>
          </IonText>

          <IonButton href="/tabs/feed">Back</IonButton>
        </div>
      </div>
    </>
  );
};

export default BrokenLink;
