import { PrismaClient } from '@prisma/client';

async function Awards() {
  process.stdout.write('seeding Awards ...');
  const prisma = new PrismaClient();

  let list = ['Rakuten Travel Gold Award 2021', 'Rakuten Travel Gold Award 2020'];

  for (var i = 0; i < list.length; i++) {
    const alice = await prisma.awards.upsert({
      where: { id: i },
      update: {},
      create: {
        name: list[i],
        description: '',
      },
    });
  }

  await prisma.$disconnect();
  console.log('seed Awards done');
}

export default Awards;
