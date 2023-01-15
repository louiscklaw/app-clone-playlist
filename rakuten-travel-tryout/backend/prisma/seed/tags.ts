import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function tags() {
  process.stdout.write('seeding tags...');
  for (var i = 0; i < 199; i++) {
    await prisma.tags.upsert({
      where: { id: i },
      update: {},
      create: {
        name: '度假村酒店',
      },
    });
  }

  await prisma.$disconnect();
  console.log('seed tags done');
}

export default tags;
