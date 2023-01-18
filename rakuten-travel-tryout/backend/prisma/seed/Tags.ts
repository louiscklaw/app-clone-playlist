import { PrismaClient } from '@prisma/client';

async function Tags() {
  process.stdout.write('seeding Tags...');
  const prisma = new PrismaClient();

  for (var i = 0; i < 19; i++) {
    await prisma.tags.upsert({
      where: { id: i },
      update: {},
      create: {
        name: '度假村酒店',
      },
    });
  }

  await prisma.$disconnect();
  console.log('seed Tags done');
}

export default Tags;
