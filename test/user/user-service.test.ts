require('../utils/globalBefore');
import { expect } from 'chai';
import { Role } from '../../src/database/models/role.model';
import { User } from '../../src/database/models/user.model';
import UserService from '../../src/modules/user/user.service';
import cleanUp from '../utils/clean-up';
import Factory from '../utils/factory';
import { v4 as uuidv4 } from 'uuid';

const factory = new Factory({ Role });

let role: any;
before(async () => {
  role = await factory.create('Role', { role: 'manager' });
});

after(async () => {
  await cleanUp([Role]);
});

afterEach(async () => {
  await cleanUp([User]);
});

describe(`User service`, () => {
  describe(`Global service tests`, () => {
    it('Service exists', async () => {
      const service = UserService;
      expect(service).to.exist;
    });
  });

  describe(`Get method`, () => {
    it('Get method returns array', async () => {
      const users = await UserService.get({});
      expect(Array.isArray(users)).to.be.true;
    });

    it('Get method returns correct count', async () => {
      try {
        const user = await UserService.create({
          email: 'aaa@aaa.bg',
          password: 'pass',
          firstName: 'user1',
          lastName: 'user2',
          deposit: 10,
          roleId: role.id,
        });
        const users = await UserService.get({});
        expect(users.length).to.equal(1);
      } catch (error) {
        expect(error).to.be.null;
      }
    });
  });

  describe(`Create method`, () => {
    it('Create method exists', async () => {
      expect(UserService.create).to.exist;
    });

    it('Create method returns error if email exists', async () => {
      try {
        await UserService.create({
          email: 'aaa@aaa.bg',
          password: 'pass',
          firstName: 'user1',
          lastName: 'user2',
          deposit: 10,
          roleId: role.id,
        });
        await UserService.create({
          email: 'aaa@aaa.bg',
          password: 'pass',
          firstName: 'user3',
          lastName: 'user4',
          deposit: 10,
          roleId: role.id,
        });
      } catch (error: any) {
        expect(error).to.haveOwnProperty('message');
        expect(error.message).to.equal('User with this email already exists!');
      }
    });

    it('Create method returns correct result', async () => {
      try {
        const result = await UserService.create({
          email: 'aaa@aaa.bg',
          password: 'pass',
          firstName: 'user1',
          lastName: 'user2',
          deposit: 10,
          roleId: role.id,
        });
        expect(result).to.haveOwnProperty('accessToken');
        expect(result).to.haveOwnProperty('refreshToken');
        expect(result).to.haveOwnProperty('user');
      } catch (error) {
        expect(error).to.be.null;
      }
    });
  });

  describe(`Update method`, () => {
    it('Update method exists', async () => {
      expect(UserService.update).to.exist;
    });

    it('Update method returns error if ID does not exist', async () => {
      try {
        const fakeId = uuidv4();

        await UserService.update(fakeId, {
          email: 'aaa@aaa.bg',
          password: 'pass',
          firstName: 'user3',
          lastName: 'user4',
          deposit: 10,
          roleId: role.id,
        });
      } catch (error: any) {
        expect(error).to.haveOwnProperty('message');
        expect(error.message).to.equal('A user with this ID does not exist!');
      }
    });

    it('Update method returns error if email is not unique', async () => {
      try {
        await User.create({
          email: '1@aaa.bg',
          password: 'pass',
          firstName: 'user1',
          lastName: 'user2',
          deposit: 10,
          roleId: role.id,
        });
        const user = await User.create({
          email: '2@aaa.bg',
          password: 'pass',
          firstName: 'user1',
          lastName: 'user2',
          deposit: 10,
          roleId: role.id,
        });

        const id = user.getDataValue('id');

        if (!id) {
          return;
        }

        await UserService.update(id, {
          email: '1@aaa.bg',
          password: 'pass',
          firstName: 'user3',
          lastName: 'user4',
          deposit: 10,
          roleId: role.id,
        });
      } catch (error: any) {
        expect(error).to.haveOwnProperty('message');
        expect(error.message).to.equal(
          'A user with that email already exists!'
        );
      }
    });

    it('Update method happy path', async () => {
      try {
        const user = await User.create({
          email: '1@aaa.bg',
          password: 'pass',
          firstName: 'user1',
          lastName: 'user2',
          deposit: 10,
          roleId: role.id,
        });

        const id = user.getDataValue('id');

        if (!id) {
          return;
        }

        const updated = await UserService.update(id, {
          email: '2@aaa.bg',
          password: 'pass',
          firstName: 'user3',
          lastName: 'user4',
          deposit: 10,
          roleId: role.id,
        });
        expect(updated.getDataValue('email')).to.equal('2@aaa.bg');
      } catch (error: any) {
        console.log(error);

        expect(error).to.be.null;
      }
    });
  });

  describe(`Delete method`, () => {
    it('Delete method exists', async () => {
      expect(UserService.delete).to.exist;
    });

    it('Delete method returns error if ID does not exist', async () => {
      try {
        const fakeId = uuidv4();

        await UserService.delete(fakeId);
      } catch (error: any) {
        expect(error).to.haveOwnProperty('message');
        expect(error.message).to.equal('A user with this ID does not exist!');
      }
    });

    it('Delete method happy path', async () => {
      try {
        const user = await User.create({
          email: '1@aaa.bg',
          password: 'pass',
          firstName: 'user1',
          lastName: 'user2',
          deposit: 10,
          roleId: role.id,
        });

        const id = user.getDataValue('id');

        if (!id) {
          return;
        }

        const deleted = await UserService.delete(id);
        expect(deleted?.getDataValue('email')).to.equal('1@aaa.bg');
      } catch (error: any) {
        expect(error).to.be.null;
      }
    });
  });
});
