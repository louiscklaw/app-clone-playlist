import * as bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function User() {
  process.stdout.write('seeding User ...');

  for (var i = 0; i < 19; i++) {
    const salt = await bcrypt.genSalt();
    let password = await bcrypt.hash('Aa1234567', salt);

    const alice = await prisma.user.upsert({
      where: { email: `alice${i}@prisma.io` },
      update: {},
      create: {
        email: `client${i}@gmail.com`,
        name: `client ${i}`,
        password: password,
        posts: {
          create: {
            title: 'Check out Prisma with Next.js',
            content: 'https://www.prisma.io/nextjs',
            published: true,
          },
        },
      },
    });

    await prisma.user.upsert({
      where: { email: `demo@louislabs.com` },
      update: {},
      create: {
        email: `demo@louislabs.com`,
        name: `demo a/c`,
        password: await bcrypt.hash('Password123!', salt),
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
