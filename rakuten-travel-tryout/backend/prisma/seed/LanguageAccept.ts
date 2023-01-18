import { PrismaClient } from '@prisma/client';

async function LanguageAccept() {
  process.stdout.write('seeding LanguageAccept ...');
  const prisma = new PrismaClient();

  let list = ['日文', '英文'];

  for (var i = 0; i < list.length; i++) {
    const alice = await prisma.languageAccept.upsert({
      where: { id: i },
      update: {},
      create: {
        name: list[i],
        description: 'Alice',
      },
    });
  }

  await prisma.$disconnect();
  console.log('seed LanguageAccept done');
}

export default LanguageAccept;
