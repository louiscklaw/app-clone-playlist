import cron from 'node-cron';

// class HelloworldCron {
//   public static getTask(): cron.ScheduledTask {
//     const task = cron.schedule('*/1 * * * *', async () => {
//       const message = 'Running task every minutes helloworld';
//       console.log(message);
//     });

//     return task;
//   }
// }

const HelloworldCron: cron.ScheduledTask = cron.schedule('*/1 * * * *', async () => {
  const message = 'Running task every minutes helloworld';
  console.log(message);
});

export default HelloworldCron;
