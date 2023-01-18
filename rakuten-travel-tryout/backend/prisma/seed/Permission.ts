import { PrismaClient } from '@prisma/client';

async function Permission() {
  process.stdout.write('seeding Permission ...');
  const prisma = new PrismaClient();

  for (var i = 0; i < 19; i++) {
    const alice = await prisma.permission.upsert({
      where: { id: i },
      update: {},
      create: {
        name: `alice${i}@Permission.io`,
        description: 'Alice',
      },
    });
  }

  await prisma.$disconnect();
  console.log('seed Permission done');
}

export default Permission;
