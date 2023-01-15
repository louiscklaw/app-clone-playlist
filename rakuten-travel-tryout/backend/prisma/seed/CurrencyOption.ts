import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const currency_list = ['香港', '南韓', '印尼', '台灣', '新加坡', '泰國', '澳洲', '美國', '英國', '菲律賓', '馬來西亞'];

async function CurrencyOption() {
  process.stdout.write('seeding currency option...');
  for (var i = 0; i < currency_list.length; i++) {
    await prisma.currencyOption.upsert({
      where: { name: currency_list[i] },
      update: {},
      create: {
        name: currency_list[i],
        location: currency_list[i],
      },
    });
  }

  console.log('seeding done');
  await prisma.$disconnect();
}

export default CurrencyOption;
