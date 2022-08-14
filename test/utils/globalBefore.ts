import { dbInitialize } from '../../src/database/db.connection';

before((done) => {
  console.log('before tests');
  dbInitialize();
  done();
});
