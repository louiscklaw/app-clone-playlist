import { IonItem, IonRouterLink } from '@ionic/react';
import { Grid, Rating, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import MainTemplate from '../../../components/MainTemplate';
import { IPagePros } from '../../../interfaces/IPageProps';
import { img_src_cleaning, img_src_laundry, img_src_notice } from '../../../test_var';
// import MainTemplate from '../../components/MainTemplate';
// import { IPagePros } from '../../interfaces/IPageProps';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

function TestTile(props: { title: string; description: string; href: string; img_src: string }) {
  let { title, description, href, img_src } = props;

  return (
    <>
      <div
        style={{
          padding: '1rem',
          margin: '1rem',
          borderRadius: '1rem',
          backgroundImage: `linear-gradient(195deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${img_src}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          boxShadow: '0 0 10px #555',
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'Roboto', fontWeight: 300 }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'Roboto', fontWeight: 300, marginTop: '1rem' }}
            >
              {description}
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', marginTop: '1rem' }}>
            <div style={{ flexGrow: 1 }}></div>
            <div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'baseline' }}>
                <KeyboardDoubleArrowRightIcon sx={{ fontSize: '1rem', color: 'white', opacity: 0.8 }} />
                <Typography
                  variant="body1"
                  style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'Roboto', fontWeight: 300 }}
                >
                  Find out more
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

function PageButton(props: { title: string; href: string; img_src: string }) {
  let { title, href, img_src } = props;

  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(195deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${img_src}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',

          height: '50px',
          width: '25%',

          color: 'white',

          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',

          borderRadius: '1rem',

          margin: '0.5rem',

          boxShadow: '0 0 10px #555',
        }}
      >
        <div>{title}</div>
      </div>
    </>
  );
}

const ServiceHome: React.FC<IPagePros> = ({ props }: IPagePros) => {
  let [rating_value, setRatingValue] = useState(3);

  return (
    <MainTemplate>
      <div
        style={{
          backgroundImage:
            'linear-gradient(195deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',

          borderRadius: '0 0 1rem 1rem',
          boxShadow: '0 0 10px #555',
        }}
      >
        <div style={{ padding: '1rem' }}>
          <Grid container>
            <Grid item xs={6} style={{}}>
              <div>
                <Typography
                  variant="body1"
                  style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'Roboto', fontWeight: 300 }}
                >
                  Hi, Mr. Law
                </Typography>
              </div>
              <div style={{ marginTop: '0.5rem' }}>
                <Typography
                  variant="body1"
                  style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'Roboto', fontWeight: 300 }}
                >
                  HARBOUR-VIEW ROOM
                </Typography>
                <Typography
                  variant="body1"
                  style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'Roboto', fontWeight: 300 }}
                >
                  Smoke-free Rooms
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6} style={{}}>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Typography
                  variant="body1"
                  style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'Roboto', fontWeight: 300 }}
                >
                  Service Rating
                </Typography>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Rating
                  name="simple-controlled"
                  value={rating_value}
                  onChange={(event, newValue) => setRatingValue(newValue || 0)}
                />
              </div>
            </Grid>
            <Grid item xs={12} sx={{ paddingTop: { xs: '1rem' } }}>
              <div>
                <Typography
                  variant="body1"
                  style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'Roboto', fontWeight: 300 }}
                >
                  Please Note:
                </Typography>

                <Typography
                  variant="body2"
                  style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'Roboto', fontWeight: 300 }}
                >
                  All guest accommodations and indoor public areas are smoke-free. Smoking will be prohibited and any
                  violation will result in an additional room night charge.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <PageButton title={'Cleaning'} href="//www.google.com" img_src={img_src_cleaning}></PageButton>
        <PageButton title={'Laundry'} href="//www.google.com" img_src={img_src_laundry}></PageButton>
        <PageButton title={'Notice'} href="//www.google.com" img_src={img_src_notice}></PageButton>
      </div>

      <TestTile
        title="POLICY ON MASK OR FACE COVERINGS"
        description="Required For All Guests Age 4 And Above, Strongly Recommended For Children Age 2-3 Years Old"
        href="https://www.google.com"
        img_src={img_src_laundry}
      />
      <TestTile
        title="HOTEL OVERVIEW"
        description="HOTEL OVERVIEW_description"
        href="https://www.google.com"
        img_src={img_src_laundry}
      />
      <TestTile
        title="ACCOMMODATIONS"
        description="ACCOMMODATIONS_description"
        href="https://www.google.com"
        img_src={img_src_laundry}
      />
      <TestTile
        title="PHOTOS & VIDEOS"
        description="PHOTOS & VIDEOS_description"
        href="https://www.google.com"
        img_src={img_src_laundry}
      />
      <TestTile
        title="OFFERS"
        description="OFFERS_description"
        href="https://www.google.com"
        img_src={img_src_laundry}
      />
      <TestTile
        title="DINING"
        description="DINING_description"
        href="https://www.google.com"
        img_src={img_src_laundry}
      />
      <TestTile
        title="EXTENDED STAYS"
        description="EXTENDED STAYS_description"
        href="https://www.google.com"
        img_src={img_src_laundry}
      />
      <TestTile
        title="SPA & WELLNESS"
        description="We are open & accepting bookings. Facilities, services subject to prevailing govt guidelines.KIDS FOR ALL SEASONSKIDS FOR ALL SEASONS_description"
        href="https://www.google.com"
        img_src={img_src_laundry}
      />
      <TestTile
        title="LOCATION"
        description="LOCATION_description"
        href="https://www.google.com"
        img_src={img_src_laundry}
      />

      <TestTile
        title="SERVICES & AMENITIES"
        description="SERVICES & AMENITIES_description"
        href="https://www.google.com"
        img_src={img_src_laundry}
      />

      <TestTile
        title="WEDDINGS"
        description="WEDDINGS_description"
        href="https://www.google.com"
        img_src={img_src_laundry}
      />
      <TestTile
        title="MEETINGS & EVENTS"
        description="MEETINGS & EVENTS_description"
        href="https://www.google.com"
        img_src={img_src_laundry}
      />
      <TestTile
        title="SLEEP WELL"
        description="SLEEP WELL_description"
        href="https://www.google.com"
        img_src={img_src_laundry}
      />
      <TestTile
        title="CONTACT US"
        description="CONTACT US_description"
        href="https://www.google.com"
        img_src={img_src_laundry}
      />
    </MainTemplate>
  );
};

export default ServiceHome;
