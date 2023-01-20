import React from 'react';
import {
  IonPage,
  IonHeader,
  IonItem,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonToggle,
  IonLabel,
  useIonRouter,
} from '@ionic/react';
import { useRouter } from 'next/router';

const Landing = () => {
  const next_router = useRouter();

  // React.useEffect(() => {
  //   console.log('Landing');
  // }, []);

  return (
    <>
      <IonPage>
        <IonHeader>test</IonHeader>
        <IonContent>
          <div>landing page</div>
          next_router
          {/* <pre>{JSON.stringify(next_router.asPath, null, 2)}</pre> */}
          <div style={{ backgroundColor: 'gold' }}>bye</div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Landing;
