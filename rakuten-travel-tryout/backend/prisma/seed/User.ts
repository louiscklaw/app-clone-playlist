import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function User() {
  process.stdout.write('seeding User ...');

  for (var i = 0; i < 19; i++) {
    const alice = await prisma.user.upsert({
      where: { email: `alice${i}@prisma.io` },
      update: {},
      create: {
        email: `client${i}@gmail.com`,
        name: `client ${i}`,
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
  console.log('User seed done');
}

export default User;