import { PrismaClient } from '@prisma/client';

async function CategoriesOnPostTest() {
  process.stdout.write('seeding CategoriesOnPostTest ...');
  const prisma = new PrismaClient();

  let post_list = ['p1', 'p2', 'p3'];
  let cat_list = ['c1', 'c2', 'c3'];

  for (var i = 0; i < cat_list.length; i++) {
    const created = await prisma.category.upsert({
      where: { id: i + 1 },
      update: {},
      create: { name: `cat_${i}` },
    });
  }

  for (var i = 0; i < post_list.length; i++) {
    const post = await prisma.postTest.upsert({
      where: { id: i },
      update: {},
      create: {
        title: 'How to be Bob',
        categories: {
          create: [
            {
              assignedBy: 'Bob',
              assignedAt: new Date(),
              category: { connect: { id: i + 1 } },
            },
            {
              assignedBy: 'Bob',
              assignedAt: new Date(),
              category: { connect: { id: 2 } },
            },
          ],
        },
      },
    });
  }

  // const result_posts = await prisma.postTest.findMany({ where: { id: 2 }, include: { categories: true } });
  const result_category = await prisma.category.findMany({
    include: { posts: { include: { post: true } } },
  });
  // console.log(JSON.stringify(result_category, null, 2));

  await prisma.$disconnect();
  console.log('seed CategoriesOnPostTest done');
}

export default CategoriesOnPostTest;
