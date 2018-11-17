const faker = require('faker');
const fs = require('fs');
const file = fs.createWriteStream('./data2.csv');

console.time('CREATE 10-MIL');
file.write('user,prodRating,yesRating,noRating,date,body,verified,recommend,size,width,comfort,quality,response,prodId,header\n');

for (let i = 1; i <= 10000000; i++) {
  let array = [];
  const response = Math.random() > 0.5 ? null : faker.lorem.sentence();
  const header = Math.random() > 0.5 ? null : faker.lorem.sentence();
  array.push(faker.internet.userName());
  array.push(faker.random.number({ min: 1, max: 5 }));
  array.push(faker.random.number({ min: 0, max: 200 }));
  array.push(faker.random.number({ min: 0, max: 200 }));
  array.push(faker.date.past().toISOString());
  array.push(faker.lorem.sentences());
  array.push(faker.random.boolean());
  array.push(faker.random.boolean());
  array.push(faker.random.number({ min: 1, max: 4 }));
  array.push(faker.random.number({ min: 1, max: 4 }));
  array.push(faker.random.number({ min: 1, max: 4 }));
  array.push(faker.random.number({ min: 1, max: 4 }));
  array.push(response);
  array.push(faker.random.number({min: 1, max: 1000}));
  array.push(header);

  file.write(array.join(',') + '\n');
}

file.end();
console.timeEnd('CREATE 10-MIL');