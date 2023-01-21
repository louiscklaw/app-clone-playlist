import { IonItem, IonRouterLink } from '@ionic/react';
import { useEffect } from 'react';
import MainTemplate from '../../components/MainTemplate';
import { IPagePros } from '../../interfaces/IPageProps';

const Settings: React.FC<IPagePros> = ({ props }: IPagePros) => {
  return (
    <MainTemplate>
      <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem', gap: '0.5rem' }}>Settings</div>

      <div>is it settings ?</div>
    </MainTemplate>
  );
};

export default Settings;
