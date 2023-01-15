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
        covin_practice: {
          create: [
            { name: '員工', description: '服務客人時保持適當距離 員工洗手、漱口、戴口罩 定期實施體溫檢測' },
            { name: '消毒', description: '公共區域定期消毒 消毒客房 即棄式拖鞋' },
            { name: '通風', description: '公共區域定期換氣 客房在使用前後換氣' },
            { name: '登記入住／退房', description: '房間內辦理入住 房間內辦理退房' },
            { name: '客房', description: '提供消毒液 提供口罩 定期消毒家具' },
            { name: '緊急應對的準備', description: '已備妥新冠肺炎緊急對應手冊 員工已接受新冠肺炎緊急對應訓練' },
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
