import {
  IonApp,
  IonLabel,
  IonRouterOutlet,
  setupIonicReact,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
} from '@ionic/react';
import { cog, flash, list } from 'ionicons/icons';
import { StatusBar, Style } from '@capacitor/status-bar';

import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import Feed from './pages/Feed';
import Lists from './pages/Lists';
import ListDetail from './pages/ListDetail';
import Settings from './pages/Settings';

import Tabs from './pages/Tabs';
import BrokenLink from './pages/BrokenLink';
import Debug from './pages/Debug';
import Helloworld from './pages/Helloworld';
import Landing from './pages/Landing';

setupIonicReact({});

window.matchMedia('(prefers-color-scheme: dark)').addListener(async status => {
  try {
    await StatusBar.setStyle({
      style: status.matches ? Style.Dark : Style.Light,
    });
  } catch {}
});

const AppShell = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet id="main">
          {/* debug route */}
          <Route path="/test/broken-link-page" render={() => <BrokenLink />} />
          <Route path="/test/debug" render={() => <Debug />} />
          <Route path="/test/helloworld" render={() => <Helloworld />} />

          {/* restaruant */}

          {/* restaruant */}

          {/* ordering */}
          {/* ordering */}

          <Route path="/restaurant/landing" render={() => <Landing />} exact={true} />

          <Route path="/tabs" render={() => <Tabs />} />
          <Route path="/" render={() => <Redirect to="/tabs/feed" />} exact={true} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default AppShell;
