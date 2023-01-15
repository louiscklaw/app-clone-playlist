import { PrismaClient } from '@prisma/client';
import { helloworld } from './seed/helloworld';
import { hotel_info } from './seed/hotel_info';
import { CurrencyOption } from './seed/CurrencyOption';
import { tags } from './seed/tags';

const prisma = new PrismaClient();

async function main() {
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

  console.log('seed done');
}

Promise.all([
  main(),
  helloworld(),
  // hotel_info(),
  tags(),
]).then(values => {
  console.log('done');
});
