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
        tel: '+81 980 74 7500',
        fax: '+81 980 74 7501',
        accommodation_notice: '如果入住時間超過預定時間，請務必與我們聯繫。',
        enabled: true,
        awards: {
          create: [{ name: 'Rakuten Travel Gold Award 2021' }, { name: 'Rakuten Travel Gold Award 2020' }],
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
        facilities: { create: [{ name: '停車場' }] },
        hotel_type: { create: [{ name: '度假村酒店' }] },
        room_plan: {
          create: [
            {
              name: '房間不含餐計劃 [不含餐]',
              description: '該計劃僅適用於房費。請注意，不提供餐點。',
              plan_setup: {
                create: [
                  {
                    name: '2房型（帶日式房間）帶泳池 [日式西式客房] [禁煙] [海景]',
                    description: 'Semi Western-Style Room',
                    images: [
                      'https://trvis.r10s.com/d/strg/ctrl/26/b4e5c25eabf083b616629c4228be5f398290a205.47.1.26.2.jpg',
                      'https://trvis.r10s.com/d/strg/ctrl/26/21edcacd90fefea7251afed2e11ecabca9e5ef68.47.1.26.2.jpg',
                      'https://trvis.r10s.com/d/strg/ctrl/26/d52d1604efc19c68d23a4a96d7adb3bac4fb6cbf.47.1.26.2.jpg',
                      'https://trvis.r10s.com/d/strg/ctrl/26/aff4af030b158d8b1e35f194b7bc2e5d51127857.47.1.26.2.jpg',
                      'https://trvis.r10s.com/d/strg/ctrl/26/818f8b9f5c7b9fcca36a917d972e85d67628cb02.47.1.26.2.jpg',
                    ].join(','),
                    points: ['日式寢具 x 3 單人床 x 4', '129m²', '1–7 位住客', '禁煙'].join(','),
                  },
                  {
                    name: '1臥室類型（帶沙發床）游泳池和按摩浴缸 [套房] [禁煙] [海景]',
                    description: 'SUITE Twin Room',
                    images: [
                      'https://trvis.r10s.com/d/strg/ctrl/26/21edcacd90fefea7251afed2e11ecabca9e5ef68.47.1.26.2.jpg',
                      'https://trvis.r10s.com/d/strg/ctrl/26/a5dd0c6417d479bf7f82135ce931261ea19a89d6.47.1.26.2.jpg',
                      'https://trvis.r10s.com/d/strg/ctrl/26/a5dd0c6417d479bf7f82135ce931261ea19a89d6.47.1.26.2.jpg',
                      'https://trvis.r10s.com/d/strg/ctrl/26/b4e5c25eabf083b616629c4228be5f398290a205.47.1.26.2.jpg',
                    ].join(','),
                    // price: {value: 3,057.55, description: '包稅與其他費用 1 間房 2 位住客 1 晚'},
                    points: ['日式寢具 x 3 單人床 x 4', '129m²', '1–7 位住客', '禁煙'].join(','),
                  },
                ],
              },
            },
          ],
        },
      },
    });
  }
  console.log('seed done');
}

export default HotelInfo;
