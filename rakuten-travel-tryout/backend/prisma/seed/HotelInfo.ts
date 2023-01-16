import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function HotelInfo() {
  process.stdout.write('seeding HotelInfo ...');

  for (var i = 0; i < 19; i++) {
    const alice = await prisma.hotelInfo.upsert({
      where: { id: i },
      update: {},
      create: {
        email: `enquiry${i}@HotelInfo.io`,
        name: '宮古島上野費利斯別墅套房酒店',
        images: [
          'https://trvis.r10s.com/d/strg/ctrl/26/437b86622a9af43c03f2628882661486821b7879.47.9.26.3.jpg',
          'https://trvis.r10s.com/d/strg/ctrl/26/91d046af12015df16c75e62ab5eebe05154f4a0b.47.1.26.2.jpg',
          'https://trvis.r10s.com/d/strg/ctrl/26/91d046af12015df16c75e62ab5eebe05154f4a0b.47.1.26.2.jpg',
        ].join(','),
        short_description: '設有私人溫水游泳池和廚房的別墅度假村',
        description:
          '這棟別墅是別墅風格的夏威夷公寓出租。 所有 12 棟別墅均設有溫水游泳池，私密性強。 廚房、家具、家電一應俱全，可長期入住。 在您逗留期間，這將是一個只屬於您的私人空間，所以請隨意使用。',
        address: '日本, 906-0203, 935-8 Ueno Miyaguni, Miyakojima-shi, Okinawa',
        access: '由宮古機場駕車約 15 分鐘可達',
      },
    });
  }
  console.log('seed done');
}

export default HotelInfo;
