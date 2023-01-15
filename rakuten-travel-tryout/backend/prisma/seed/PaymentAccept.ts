import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function PaymentAccept() {
  process.stdout.write('seeding PaymentAccept ...');

  let list = ['Visa 卡', '萬事達卡', 'JCB 卡', '可使用現金付款'];

  for (var i = 0; i < list.length; i++) {
    const alice = await prisma.paymentAccept.upsert({
      where: { id: i },
      update: {},
      create: {
        name: list[i],
        description: '',
      },
    });
  }

  await prisma.$disconnect();
  console.log('seed PaymentAccept done');
}

export default PaymentAccept;
