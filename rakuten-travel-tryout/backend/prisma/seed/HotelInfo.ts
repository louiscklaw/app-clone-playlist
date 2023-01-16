import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function HotelInfo() {
  process.stdout.write('seeding HotelInfo ...');
  let plan_list = ['p1', 'p2', 'p3'];
  let room_list = ['r1', 'r2', 'r3'];

  for (var i = 0; i < room_list.length; i++) {
    await prisma.roomSetup.upsert({
      where: { id: i + 1 },
      update: {},
      create: { name: `room_${i}` },
    });
  }

  for (var i = 0; i < plan_list.length; i++) {
    await prisma.planSetup.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        name: `${plan_list[i]}`,
        rooms: {
          create: [
            {
              assignedBy: 'Bob',
              assignedAt: new Date(),
              room: { connect: { id: 1 } },
            },
            {
              assignedBy: 'Bob',
              assignedAt: new Date(),
              room: { connect: { id: 2 } },
            },
          ],
        },
      },
    });
  }

  for (var i = 0; i < 1; i++) {
    const alice = await prisma.hotelInfo.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        email: `enquiry${i}@HotelInfo.io`,

        plans: {
          create: [
            {
              assignedBy: 'Bob',
              assignedAt: new Date(),
              plan: { connect: { id: 1 } },
            },
          ],
        },
        rooms: {
          create: [
            {
              assignedBy: 'Bob',
              assignedAt: new Date(),
              room: { connect: { id: 1 } },
            },
          ],
        },
      },
    });
  }

  const result_category = await prisma.hotelInfo.findMany({
    include: { plans: { include: { plan: true } }, rooms: { include: { room: true } } },
  });
  console.log(JSON.stringify(result_category, null, 2));

  console.log('seed done');
}

export default HotelInfo;
