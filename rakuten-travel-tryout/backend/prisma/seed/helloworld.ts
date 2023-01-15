import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function helloworld() {
  for (var i = 0; i < 1; i++) {
    const alice = await prisma.helloworld.upsert({
      where: { id: i },
      update: {},
      create: {
        name: `alice${i}@helloworld.io`,
        description: 'Alice',
      },
    });
  }

  console.log('seed helloworld done');
}

export { helloworld };
