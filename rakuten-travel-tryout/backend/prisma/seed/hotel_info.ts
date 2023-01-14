import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function hotel_info() {
  for (var i = 0; i < 1; i++) {
    const alice = await prisma.user.upsert({
      where: { email: `alice${i}@hotel_info.io` },
      update: {},
      create: {
        email: `alice${i}@hotel_info.io`,
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
    console.dir(alice);
  }
}

export { hotel_info };
