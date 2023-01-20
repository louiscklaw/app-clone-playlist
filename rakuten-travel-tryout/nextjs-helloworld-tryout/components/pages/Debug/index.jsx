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

const Debug = () => {
  return (
    <>
      <h1>Debug</h1>
      <div>
        <IonButton href="/test/broken-link-page">test/broken-link-page</IonButton>
      </div>

      <div>
        <IonButton href="/tabs/feed">tabs/feed</IonButton>
      </div>

      <div>
        <IonButton href="/restaurant/landing">restaurant/landing</IonButton>
      </div>
    </>
  );
};

export default Debug;
