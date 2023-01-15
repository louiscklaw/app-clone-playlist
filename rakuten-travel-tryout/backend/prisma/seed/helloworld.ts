import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function helloworld() {
  process.stdout.write('seeding helloworld ...');

  for (var i = 0; i < 19; i++) {
    const alice = await prisma.helloworld.upsert({
      where: { id: i },
      update: {},
      create: {
        name: `alice${i}@helloworld.io`,
        description: 'Alice',
      },
    });
  }

  await prisma.$disconnect();
  console.log('seed helloworld done');
}

export default helloworld;
