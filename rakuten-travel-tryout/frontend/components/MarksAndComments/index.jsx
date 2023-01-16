import MarkCircularProgress from 'components/MarkCircularProgress';

const marks = {
  value: 5,
  description: 'Exceptional',
  peoples: 24,
  breakdown: {
    location: 5,
    facilities: 5,
    services: 5,
    comfort: 5,
    bath: 5,
    catering: 5,
  },
};

export default ({ sx }) => {
  return (
    <>
      <div style={sx}>
        評分和評語
        <div class="row">
          <div style={{ minWidth: '300px', width: '30%' }}>
            <MarkCircularProgress />
            {marks.description}
            {marks.peoples}
          </div>
          <div style={{ flexGrow: 1, backgroundColor: 'tomato' }}>2</div>
        </div>
      </div>
    </>
  );
};
