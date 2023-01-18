import { PrismaClient } from '@prisma/client';

async function Log() {
  process.stdout.write('seeding log ...');
  const prisma = new PrismaClient();

  let list = Array(199)
    .fill(0)
    .map((x, i) => `log ${i}`);

  for (var i = 0; i < list.length; i++) {
    const alice = await prisma.log.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        name: `client_1@gmail.com`,
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
