const db = require('../config/connection');

const { Character } = require('../models');
const characterSeeds = require('./characterSeeds.json');

db.once('open', async () => {
  await Character.deleteMany({});
  await Character.create(characterSeeds);

  console.log('all done!');
  process.exit(0);
});