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
} from '@ionic/react';

const Helloworld = () => {
  React.useEffect(() => {
    console.log('helloworld');
  }, []);

  return (
    <>
      <IonPage>
        <IonHeader>test</IonHeader>
        <IonContent>
          <div>helloworld page</div>
          <div style={{ backgroundColor: 'gold' }}>bye</div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Helloworld;
