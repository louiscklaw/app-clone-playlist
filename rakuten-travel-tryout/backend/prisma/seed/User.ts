import * as bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

import { faker } from '@faker-js/faker';
import { faker as faker_en_us } from '@faker-js/faker/locale/en_US';
import { faker as faker_zh_cn } from '@faker-js/faker/locale/zh_CN';
import { faker as faker_zh_tw } from '@faker-js/faker/locale/zh_TW';
import { faker as faker_ja } from '@faker-js/faker/locale/ja';

// https://fakerjs.dev/

async function User() {
  process.stdout.write('seeding User ...');
  const prisma = new PrismaClient();

  const salt = await bcrypt.genSalt();
  let password = await bcrypt.hash('Aa1234567', salt);

  for (var i = 0; i < 199; i++) {
    const faker_locale = faker.helpers.arrayElement([
      { n: 'en', o: faker_en_us },
      { n: 'zh_cn', o: faker_zh_cn },
      { n: 'zh_tw', o: faker_zh_tw },
      { n: 'ja', o: faker_ja },
      //
    ]);

    const l_name = faker_locale.n,
      l_faker = faker_locale.o;
    const sex = l_faker.name.sexType();
    const firstName = l_faker.name.firstName(sex);
    const lastName = l_faker.name.lastName(sex);

    const alice = await prisma.user.upsert({
      where: { email: `alice${i}@prisma.io` },
      update: {},
      create: {
        email: l_faker.helpers.unique(l_faker.internet.email, [firstName, lastName]),
        name: firstName + ' ' + lastName,
        password: password,
        avatar: '/assets/avatars/avatar-carson-darrin.png',
        country: l_faker.address.country(),
        currency: '$',
        locale: l_name,
        city: l_faker.address.city(),
        state: l_faker.address.state(),

        hasAcceptedMarketing: true,
        isProspect: false,
        isReturning: true,
        totalSpent: 300,
        totalOrders: 3,
        subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),

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
