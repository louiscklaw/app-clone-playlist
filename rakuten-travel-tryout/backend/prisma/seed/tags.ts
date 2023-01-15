import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function tags() {
  for (var i = 0; i < 3; i++) {
    await prisma.tags.upsert({
      where: { id: i },
      update: {},
      create: {
        name: '宮古島上野費利斯別墅套房酒店',
      },
    });
  }

  console.log('seed tags done');
}

export { tags };
