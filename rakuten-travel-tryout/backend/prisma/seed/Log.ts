import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function Log() {
  process.stdout.write('seeding log ...');
  let list = ['log1', 'log2', 'log3'];
  let list_serveties = ['LOW', 'MID', 'HIGH'];

  for (var i = 0; i < list_serveties.length; i++) {
    await prisma.serverity.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        category: list_serveties[i],
      },
    });
  }

  for (var i = 0; i < list.length; i++) {
    const alice = await prisma.log.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        name: `alice${i}@log.io`,
        description: `${list[i]}`,
        serverity: {
          create: [{ servity: { connect: { id: 1 } } }],
        },
      },
    });
  }

  let result_log = await prisma.log.findMany({
    include: {
      serverity: {
        include: { servity: true },
      },
    },
  });
  // console.log(JSON.stringify(result_log, null, 2));

  await prisma.$disconnect();
  console.log('seed log done');
}

export default Log;
