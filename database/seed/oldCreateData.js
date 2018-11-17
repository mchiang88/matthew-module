const faker = require('faker');
const csvWriter = require('csv-writer').createObjectCsvWriter;

const writeCSV = csvWriter({
  path: './data.csv',
  append: true,
  header: [
    { id: 'user', title: 'user' },
    { id: 'prodRating', title: 'prodRating' },
    { id: 'yesRating', title: 'yesRating' },
    { id: 'noRating', title: 'noRating' },
    { id: 'date', title: 'date' },
    { id: 'body', title: 'body' },
    { id: 'verified', title: 'verified' },
    { id: 'recommend', title: 'recommend' },
    { id: 'size', title: 'size' },
    { id: 'width', title: 'width' },
    { id: 'comfort', title: 'comfort' },
    { id: 'quality', title: 'quality' },
    { id: 'response', title: 'response' },
    { id: 'prodId', title: 'prodId' },
    { id: 'header', title: 'header' }
  ]
});

const batch = [];

const generateBatch = () => {

  for (let i = 1; i <= 10; i++) {
      const response = Math.random() > 0.5 ? null : faker.lorem.sentence();
      const header = Math.random() > 0.5 ? null : faker.lorem.sentence();
      const object = {
        user: faker.internet.userName(),
        prodRating: faker.random.number({ min: 1, max: 5 }),
        yesRating: faker.random.number({ min: 0, max: 200 }),
        noRating: faker.random.number({ min: 0, max: 200 }),
        date: faker.date.past(),
        body: faker.lorem.sentences(),
        verified: faker.random.boolean(),
        recommend: faker.random.boolean(),
        size: faker.random.number({ min: 1, max: 4 }),
        width: faker.random.number({ min: 1, max: 4 }),
        comfort: faker.random.number({ min: 1, max: 4 }),
        quality: faker.random.number({ min: 1, max: 4 }),
        response,
        prodId: faker.random.number({min: 1, max: 1000}),
        header,
      };
      batch.push(object);
  }
  writeCSV.writeRecords(batch)
    .then(() => {
      console.log('appended batch to data.csv');

      batch = [];

      if (global.gc) {
        global.gc();
      } else {
        console.error('Garbage collection unavailable.  Pass --expose-gc '
          + 'when launching node to enable forced garbage collection.');
      }
    });
  
}

const writeBatch = () => {
  writeCSV.writeRecords(generateBatch())
    .then(() => console.log('appended batch to data.csv'));
}

for (let i = 1; i <= 1; i++) {
  generateBatch();
}