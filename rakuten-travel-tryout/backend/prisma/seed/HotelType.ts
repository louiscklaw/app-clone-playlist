import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function HotelType() {
  process.stdout.write('seeding HotelType ...');

  let type_list = ['度假村酒店'];

  for (var i = 0; i < type_list.length; i++) {
    await prisma.hotelType.upsert({
      where: { id: i },
      update: {},
      create: {
        name: type_list[i],
        description: '',
      },
    });
  }

  await prisma.$disconnect();
  console.log('seed HotelType done');
}

export default HotelType;
