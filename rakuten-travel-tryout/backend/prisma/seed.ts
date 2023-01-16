import { PrismaClient } from '@prisma/client';
import helloworld from './seed/helloworld';
import Awards from './seed/Awards';
import HotelFacility from './seed/HotelFacility';
import HotelInfo from './seed/HotelInfo';
import HotelType from './seed/HotelType';
import LanguageAccept from './seed/LanguageAccept';
import PaymentAccept from './seed/PaymentAccept';
import RecommendedLocation from './seed/RecommendedLocation';
import CovinPractice from './seed/CovinPractice';
import Tags from './seed/Tags';
import user from './seed/user';
import Permission from './seed/Permission';
import Role from './seed/Role';
// import CurrencyOption from './seed/CurrencyOption';

(async () => {
  await Awards();
  await helloworld();
  await HotelFacility();
  await HotelInfo();
  await HotelType();
  await LanguageAccept();
  await PaymentAccept();
  await CovinPractice();
  await RecommendedLocation();
  await Role();
  await Tags();
  await Permission();
  await user();

  console.log('seeding done');
})();
