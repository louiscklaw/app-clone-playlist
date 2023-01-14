const getHotelInfo = ({ hotel_id }) => fetch(`//localhost:3001/hotel_info?hotel_id=${hotel_id}`);
const getHotelInfos = () => fetch('//localhost:3001/hotel_infos');

export { getHotelInfo, getHotelInfos };
