import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function CovinPractice() {
  process.stdout.write('seeding CovinPractice ...');
  let list = [
    { name: '員工', description: '服務客人時保持適當距離 員工洗手、漱口、戴口罩 定期實施體溫檢測' },
    { name: '消毒', description: '公共區域定期消毒 消毒客房 即棄式拖鞋' },
    { name: '通風', description: '公共區域定期換氣 客房在使用前後換氣' },
    { name: '登記入住／退房', description: '房間內辦理入住 房間內辦理退房' },
    { name: '客房', description: '提供消毒液 提供口罩 定期消毒家具' },
    { name: '緊急應對的準備', description: '已備妥新冠肺炎緊急對應手冊 員工已接受新冠肺炎緊急對應訓練' },
  ];

  for (var i = 0; i < list.length; i++) {
    // const alice = await prisma.covinPractice.upsert({
    //   where: { id: i },
    //   update: {},
    //   create: {
    //     ...list[i],
    //   },
    // });
  }

  await prisma.$disconnect();
  console.log('seed CovinPractice done');
}

export default CovinPractice;
