import { PrismaClient } from '@prisma/client';
import helloworld from './seed/helloworld';
import tags from './seed/tags';
import hotel_info from './seed/hotel_info';
import user from './seed/user';
import CurrencyOption from './seed/CurrencyOption';

(async () => {
  await helloworld();
  await tags();
  await hotel_info();
  await user();

  console.log('seeding done');
})();
