import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function user() {
  process.stdout.write('seeding user ...');

  for (var i = 0; i < 10; i++) {
    const alice = await prisma.user.upsert({
      where: { email: `alice${i}@prisma.io` },
      update: {},
      create: {
        email: `alice${i}@prisma.io`,
        name: 'Alice',
        posts: {
          create: {
            title: 'Check out Prisma with Next.js',
            content: 'https://www.prisma.io/nextjs',
            published: true,
          },
        },
      },
    });
  }

  await prisma.$disconnect();
  console.log('user seed done');
}

export default user;
