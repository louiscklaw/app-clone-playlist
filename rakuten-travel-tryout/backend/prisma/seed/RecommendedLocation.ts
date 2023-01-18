import { PrismaClient } from '@prisma/client';

async function helloworld() {
  process.stdout.write('seeding helloworld ...');
  const prisma = new PrismaClient();

  let list = ['距離上野德國文化村'];

  for (var i = 0; i < list.length; i++) {
    const alice = await prisma.helloworld.upsert({
      where: { id: i },
      update: {},
      create: {
        name: list[i],
        description: 'Alice',
      },
    });
  }

  await prisma.$disconnect();
  console.log('seed helloworld done');
}

export default helloworld;
