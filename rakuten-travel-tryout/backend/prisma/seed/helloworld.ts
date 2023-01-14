import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function helloworld() {
  for (var i = 0; i < 1; i++) {
    const alice = await prisma.user.upsert({
      where: { email: `alice${i}@helloworld.io` },
      update: {},
      create: {
        email: `alice${i}@helloworld.io`,
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

export { helloworld };
