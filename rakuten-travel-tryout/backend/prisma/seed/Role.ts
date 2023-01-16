import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function Role() {
  process.stdout.write('seeding Role ...');

  let role_list = [
    //
    'admin',
    'super user',
    'hotel manager',
    'hotel operator',
    'client',
  ];

  for (var i = 0; i < role_list.length; i++) {
    const alice = await prisma.role.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        name: role_list[i],
        description: `${role_list[i]} description`,
      },
    });
  }

  let result = await prisma.role.findMany({});
  console.log(JSON.stringify(result, null, 2));

  await prisma.$disconnect();
  console.log('seed Role done');
}

export default Role;
