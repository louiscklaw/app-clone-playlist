import { PrismaClient } from '@prisma/client';
import helloworld from './seed/helloworld';

import Awards from './seed/Awards';
import CovinPractice from './seed/CovinPractice';
import HotelFacility from './seed/HotelFacility';
import HotelInfo from './seed/HotelInfo';
import HotelType from './seed/HotelType';
import LanguageAccept from './seed/LanguageAccept';
import PaymentAccept from './seed/PaymentAccept';
import Permission from './seed/Permission';
import RecommendedLocation from './seed/RecommendedLocation';
import Role from './seed/Role';
import Tags from './seed/Tags';
import User from './seed/User';
import CategoriesOnPostTest from './seed/CategoriesOnPostTest';
import Log from './seed/Log';
// import CurrencyOption from './seed/CurrencyOption';

(async () => {
  await helloworld();

  await Awards();
  await CovinPractice();
  await HotelFacility();
  await HotelInfo();
  await HotelType();
  await LanguageAccept();
  await PaymentAccept();
  await Permission();
  await RecommendedLocation();
  await Role();
  await Tags();
  await CategoriesOnPostTest();
  await User();
  await Log();

  console.log('seeding done');
})();
