import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function Log() {
  process.stdout.write('seeding log ...');
  let list = ['log1', 'log2', 'log3'];

  for (var i = 0; i < list.length; i++) {
    const alice = await prisma.log.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        name: `alice${i}@log.io`,
        description: `${list[i]}`,
        serverity: 'LOW',
      },
    });
  }

  let result_log = await prisma.log.findMany({});
  // console.log(JSON.stringify(result_log, null, 2));

  await prisma.$disconnect();
  console.log('seed log done');
}

export default Log;
