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
        description:
          '這棟別墅是別墅風格的夏威夷公寓出租。 所有 12 棟別墅均設有溫水游泳池，私密性強。 廚房、家具、家電一應俱全，可長期入住。 在您逗留期間，這將是一個只屬於您的私人空間，所以請隨意使用。',
        address: '日本, 906-0203, 935-8 Ueno Miyaguni, Miyakojima-shi, Okinawa',
        access: '由宮古機場駕車約 15 分鐘可達',
        tel: '+81 980 74 7500',
        fax: '+81 980 74 7501',
        accommodation_notice: '如果入住時間超過預定時間，請務必與我們聯繫。',
        enabled: true,
        awards: {
          create: [
            {
              name: 'Rakuten Travel Gold Award 2021',
            },
            {
              name: 'Rakuten Travel Gold Award 2020',
            },
          ],
        },
        facilities: {
          create: [{ name: '度假村酒店' }, { name: '停車場' }],
        },
      },
    });
  }
  console.log('seed done');
}

export default HotelInfo;
