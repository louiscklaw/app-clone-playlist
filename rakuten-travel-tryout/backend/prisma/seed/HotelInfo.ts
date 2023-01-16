import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function HotelInfo() {
  process.stdout.write('seeding HotelInfo ...');

  let room_list = [
    {
      name: '2房型（帶日式房間）帶泳池 [日式西式客房] [禁菸] [海景]',
      points: '日式床組 x 3 單人床 x 4,129m²,1–7 位住客,禁菸,海景',
    },
    {
      name: '2房型（帶日式房間）帶泳池 [日式西式客房] [禁菸] [海景]',
      points: '日式床組 x 3 單人床 x 4,129m²,1–7 位住客,禁菸,海景',
    },
    {
      name: '2房型（帶日式房間）帶泳池 [日式西式客房] [禁菸] [海景]',
      points: '日式床組 x 3 單人床 x 4,129m²,1–7 位住客,禁菸,海景',
    },
  ];

  for (var i = 0; i < room_list.length; i++) {
    await prisma.roomSetup.upsert({
      where: { id: i + 1 },
      update: {},
      create: { name: room_list[i].name, points: room_list[i].points },
    });
  }

  let plan_list = [
    {
      name: '房間不含餐計劃 [不供餐]',
      description: '該計劃僅適用於房費。 請注意，不提供餐點',
      images: [
        'https://trvis.r10s.com/d/strg/ctrl/26/610f38c119316ec5412edaa413ece05f9ff43bc5.47.1.26.2.jpg',
        'https://trvis.r10s.com/d/strg/ctrl/26/a5dd0c6417d479bf7f82135ce931261ea19a89d6.47.1.26.2.jpg',
      ].join(','),
      points: '不供餐',
      price_value: '3,057.55',
      price_description: '含稅費與其他費用 1 間房 2 位住客 1 晚',
    },
    {
      name: '房間不含餐計劃 [不供餐]',
      description: '該計劃僅適用於房費。 請注意，不提供餐點',
      images: [
        'https://trvis.r10s.com/d/strg/ctrl/26/610f38c119316ec5412edaa413ece05f9ff43bc5.47.1.26.2.jpg',
        'https://trvis.r10s.com/d/strg/ctrl/26/91d046af12015df16c75e62ab5eebe05154f4a0b.47.1.26.2.jpg',
      ].join(','),
      points: '不供餐',
      price_value: '3,057.55',
      price_description: '含稅費與其他費用 1 間房 2 位住客 1 晚',
    },
    {
      name: '房間不含餐計劃 [不供餐]',
      description: '該計劃僅適用於房費。 請注意，不提供餐點',
      images: [
        'https://trvis.r10s.com/d/strg/ctrl/26/21edcacd90fefea7251afed2e11ecabca9e5ef68.47.1.26.2.jpg',
        'https://trvis.r10s.com/d/strg/ctrl/26/a5dd0c6417d479bf7f82135ce931261ea19a89d6.47.1.26.2.jpg',
      ].join(','),
      points: '不供餐',
      price_value: '3,057.55',
      price_description: '含稅費與其他費用 1 間房 2 位住客 1 晚',
    },
  ];

  for (var i = 0; i < plan_list.length; i++) {
    await prisma.planSetup.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        name: plan_list[i].name,
        description: plan_list[i].description,
        points: plan_list[i].points,
        price_value: plan_list[i].price_value,
        price_description: plan_list[i].price_description,
        rooms: {
          create: [
            {
              assignedBy: 'Bob',
              assignedAt: new Date(),
              room: { connect: { id: 1 } },
            },
            {
              assignedBy: 'Bob',
              assignedAt: new Date(),
              room: { connect: { id: 2 } },
            },
          ],
        },
      },
    });
  }

  for (var i = 0; i < 1; i++) {
    const alice = await prisma.hotelInfo.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        email: `enquiry${i}@HotelInfo.io`,
        name: '宮古島上野費利斯別墅套房酒店',
        check_in_time: '14:00 - 19:00',
        check_out_time: '10:00',
        no_of_rooms: '12',
        images: [
          'https://trvis.r10s.com/d/strg/ctrl/26/437b86622a9af43c03f2628882661486821b7879.47.9.26.3.jpg',
          'https://trvis.r10s.com/d/strg/ctrl/26/91d046af12015df16c75e62ab5eebe05154f4a0b.47.1.26.2.jpg',
          'https://trvis.r10s.com/d/strg/ctrl/26/91d046af12015df16c75e62ab5eebe05154f4a0b.47.1.26.2.jpg',
        ].join(','),
        short_description: '設有私人溫水游泳池和廚房的別墅度假村',
        description: `這棟別墅是別墅風格的夏威夷公寓出租。
        所有 12 棟別墅均設有溫水游泳池，私密性強。
        廚房、家具、家電一應俱全，可長期入住。
        在您逗留期間，這將是一個只屬於您的私人空間，所以請隨意使用。
        `.trim(),
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
              image:
                'https://image.space.rakuten.co.jp/d/strg/ctrl/26/ea208625443ffa03053eb13c9029d751833b4c7a.82.9.26.3.png',
            },
            { name: 'Rakuten Travel Gold Award 2020' },
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
        facilities: { create: [{ name: '停車場' }] },
        hotel_type: { create: [{ name: '度假村酒店' }] },

        plans: {
          create: [
            {
              assignedBy: 'Bob',
              assignedAt: new Date(),
              plan: { connect: { id: 1 } },
            },
          ],
        },
        rooms: {
          create: [
            {
              assignedBy: 'Bob',
              assignedAt: new Date(),
              room: { connect: { id: 1 } },
            },
          ],
        },

        comments: {
          create: [
            {
              name: 'Anonymous',
              author: 'Anonymous',
              date: '3/1/2023',
              age: '50-59 歲',
              location: '日本',
              type: '親子共遊',
              content: `今回年末年始で4連泊したのですが、
              調理用具、洗濯機、乾燥機など全て揃っており、無いものがなかったくらい充実してました。子供のおもちゃの乾電池もあるかどうか聞いてみたら持ってきて下さいました！すごい！
              年末ということで、宮古ソーキソバやシャンパン、メロン(最高級に美味)も用意してくだり、年始ということで鏡餅やお花をお部屋に飾ってくれたりと、最高でした。
              ちなみに冷蔵庫のピールやドリンクは無料で追加もできます。個人的にはシークワサーのバヤリースが沖縄限定で美味しかったので追加しました。
              置いているアメニティや、洗顔、化粧品なども、良いものを使っており、高級宿の感じを受けます。
              温水プールもあるヴィラでしたが、こちらは年末年始の時期なのに、日中は入れましたし子供が喜んでました。
              ただ、夏なら夜まで入れたのになーと少し時期的に残念。
              宿泊代は高級ですが、その価値に見合ったサービスではないでしょうか。
              大変有意義な休日旅行となりました。
              ありがとうございました。
              また今度は夏休みにリピートしたいです。`,
              place: 5,
              facilities_and_equipment: 5,
              services_and_staff: 5,
              comfort_and_cleanliness: 5,
              take_a_bath: 5,
              food: 5,
              reply: {
                create: [
                  {
                    name: 'hello',
                    date: '3/1/2023',
                    content: `この度は、フェリスヴィラスイート宮古島・上野をご利用くださいまして誠にありがとうございました。
              お忙しい中、お褒めのお言葉を頂きまして大変嬉しく存じます。
              お客様からいただくお言葉は私共の励みとなっております。これからもご滞在のすべてのお客様がご満足頂けるような施設造りをして参ります。
              年末年始のご滞在のご家族様へは宮古島メロン、大晦日には宮古そば等をご用意させていただきました。
              チェックアウト時にも美味しかったと感想をお話しくださった事鮮明に覚えております。お口に合い何よりでございます。
              フェリスヴィラスイートのフリードリンクはとても好評でございます。次回ご滞在の際はシークワサージュースを多めにご用意させていただきますね。
              プールは温水で提供しておりますが、表面温度は天候や外気温に影響されやすく、冬季のご滞在ですと日中のみのご利用になってしまったかと存じます。滞在中はお天気にも恵まれておりお楽しみいただけたご様子で何よりでございます。
              次回はご家族様で夏にお会いできます事を心よりお待ち申し上げております。
              フェリスヴィラスイート宮古島・上野　原田`,
                  },
                ],
              },
            },
          ],
        },
        payment_accept: {
          create: [
            { name: 'Visa 卡', description: '' },
            { name: '萬事達卡', description: '' },
            { name: 'American Express', description: '' },
            { name: 'JCB 卡', description: '' },
            { name: '可使用現金付款', description: '' },
          ],
        },
        language_accept: {
          create: [
            { name: '日文', description: '' },
            { name: '英文', description: '' },
          ],
        },
      },
    });
  }

  const result_category = await prisma.hotelInfo.findMany({
    include: { plans: { include: { plan: true } }, rooms: { include: { room: true } } },
  });
  console.log(JSON.stringify(result_category, null, 2));

  console.log('seed done');
}

export default HotelInfo;
