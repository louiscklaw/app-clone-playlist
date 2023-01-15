import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function Role() {
  process.stdout.write('seeding Role ...');

  for (var i = 0; i < 19; i++) {
    const alice = await prisma.role.upsert({
      where: { id: i },
      update: {},
      create: {
        name: `alice${i}@Role.io`,
        description: 'Alice',
      },
    });
  }

  await prisma.$disconnect();
  console.log('seed Role done');
}

export default Role;
