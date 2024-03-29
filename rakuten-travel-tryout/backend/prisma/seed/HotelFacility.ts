import { PrismaClient } from '@prisma/client';

async function HotelFacility() {
  process.stdout.write('seeding HotelFacility ...');
  const prisma = new PrismaClient();

  let type_list = ['停車場'];

  for (var i = 0; i < type_list.length; i++) {
    await prisma.hotelFacility.upsert({
      where: { id: i },
      update: {},
      create: {
        name: type_list[i],
        description: '',
      },
    });
  }

  await prisma.$disconnect();
  console.log('seed HotelFacility done');
}

export default HotelFacility;
