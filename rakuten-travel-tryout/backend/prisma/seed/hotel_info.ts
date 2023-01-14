import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function hotel_info() {
  for (var i = 0; i < 3; i++) {
    const alice = await prisma.hotelInfo.upsert({
      where: { email: `alice${i}@hotel_info.io` },
      update: {},
      create: {
        email: `alice${i}@hotel_info.io`,
        name: 'Alice hotel',
        address: '日本, 906-0203, 935-8 Ueno Miyaguni, Miyakojima-shi, Okinawa',
        tel: '+81 980 74 7500',
        fax: '+81 980 74 7501',
        enabled: true,
      },
    });
    console.dir(alice);
  }
}

export { hotel_info };
