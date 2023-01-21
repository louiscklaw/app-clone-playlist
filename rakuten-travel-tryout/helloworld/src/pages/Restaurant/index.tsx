import { IonItem, IonRouterLink } from '@ionic/react';
import { useEffect } from 'react';
import MainTemplate from '../../components/MainTemplate';
import { IPagePros } from '../../interfaces/IPageProps';

const Restaurant: React.FC<IPagePros> = ({ props }: IPagePros) => {
  return (
    <MainTemplate>
      <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem', gap: '0.5rem' }}>Restaurant</div>

      <div>is it Restaurant ?</div>
    </MainTemplate>
  );
};

export default Restaurant;
