import { PrismaClient } from '@prisma/client';
import helloworld from './seed/helloworld';
import tags from './seed/tags';
import hotel_info from './seed/hotel_info';
import user from './seed/user';
import HotelType from './seed/HotelType';
import HotelFacility from './seed/HotelFacility';
import LanguageAccept from './seed/LanguageAccept';
import PaymentAccept from './seed/PaymentAccept';
import RecommendedLocation from './seed/RecommendedLocation';
// import CurrencyOption from './seed/CurrencyOption';

(async () => {
  await helloworld();
  await tags();
  await hotel_info();
  await user();
  await HotelType();
  await RecommendedLocation();
  await PaymentAccept();
  await LanguageAccept();
  await HotelFacility();

  console.log('seeding done');
})();
