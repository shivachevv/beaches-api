require('../utils/globalBefore');
import sinon from 'sinon';
import { expect } from 'chai';
import RoleService from '../../src/modules/role/role.service';
import { v4 as uuidv4 } from 'uuid';
import { fakeMethod } from '../utils/sinon-helpers';

const fakeId = uuidv4();

before(async () => {});

after(async () => {});

afterEach(() => {
  sinon.restore();
});

describe(`Role service`, () => {
  describe(`Global service tests`, () => {
    it('Service exists', async () => {
      const service = RoleService;
      expect(service).to.exist;
    });
  });

  describe(`Get method`, () => {
    it('Get method returns array', async () => {
      fakeMethod(sinon, RoleService.model, 'findAll', []);

      const roles = await RoleService.get({});

      expect(Array.isArray(roles)).to.be.true;
    });

    it('Get method returns correct count', async () => {
      try {
        fakeMethod(sinon, RoleService.model, 'findAll', [
          {
            role: 'role1',
          },
        ]);

        const roles = await RoleService.get({});
        expect(roles.length).to.equal(1);
      } catch (error) {
        expect(error).to.be.null;
      }
    });
  });

  describe(`Create method`, () => {
    it('Create method exists', async () => {
      expect(RoleService.create).to.exist;
    });

    it('Create method returns error if email exists', async () => {
      try {
        fakeMethod(sinon, RoleService.model, 'findOne', [
          {
            role: 'role1',
          },
        ]);
        await RoleService.create({
          role: 'role1',
        });
      } catch (error: any) {
        expect(error).to.haveOwnProperty('message');
        expect(error.message).to.equal('Role with this name already exists!');
      }
    });

    it('Create method returns correct result', async () => {
      try {
        fakeMethod(sinon, RoleService.model, 'findOne', null);
        fakeMethod(sinon, RoleService.model, 'create', {
          role: 'role1',
        });
        const result = await RoleService.create({
          role: 'role1',
        });
        expect(result).to.haveOwnProperty('role');
        expect(result.role).to.equal('role1');
      } catch (error) {
        expect(error).to.be.null;
      }
    });
  });

  describe(`Update method`, () => {
    it('Update method exists', async () => {
      expect(RoleService.update).to.exist;
    });

    it('Update method returns error if ID does not exist', async () => {
      try {
        fakeMethod(sinon, RoleService.model, 'findOne', null);

        await RoleService.update(fakeId, {
          role: 'role1',
        });
      } catch (error: any) {
        expect(error).to.haveOwnProperty('message');
        expect(error.message).to.equal('A role with this ID does not exist!');
      }
    });

    it('Update method returns error if email is not unique', async () => {
      try {
        fakeMethod(sinon, RoleService.model, 'findOne', { role: 'role1' });

        const role = await RoleService.update(fakeId, {
          role: 'role1',
        });
      } catch (error: any) {
        expect(error).to.haveOwnProperty('message');
        expect(error.message).to.equal('A role with that name already exists!');
      }
    });

    it('Update method happy path', async () => {
      const fakeFindOne = (params: any) => {
        if (params?.where?.id) {
          return {
            role: 'role1',
            update: (payload: Record<string, any>) => ({
              role: 'role1',
              ...payload,
            }),
          };
        }
        if (params?.where?.role) {
          return null;
        }
      };

      try {
        fakeMethod(sinon, RoleService.model, 'findOne', null, fakeFindOne);

        const updated = await RoleService.update(fakeId, {
          role: 'role2',
        });

        expect(updated).to.haveOwnProperty('role');
        expect(updated.role).to.equal('role2');
      } catch (error: any) {
        expect(error).to.be.null;
      }
    });
  });

  describe(`Delete method`, () => {
    it('Delete method exists', async () => {
      expect(RoleService.delete).to.exist;
    });

    it('Delete method returns error if ID does not exist', async () => {
      try {
        fakeMethod(sinon, RoleService.model, 'findOne', null);

        await RoleService.delete(fakeId);
      } catch (error: any) {
        expect(error).to.haveOwnProperty('message');
        expect(error.message).to.equal('A role with this ID does not exist!');
      }
    });

    it('Delete method happy path', async () => {
      const fakeFindOne = (params: any) => {
        if (!params.hasOwnProperty('paranoid')) {
          return {
            role: 'role1',
          };
        }

        return {
          role: 'role1',
          deletedAt: new Date(),
        };
      };
      try {
        fakeMethod(sinon, RoleService.model, 'findOne', null, fakeFindOne);
        fakeMethod(sinon, RoleService.model, 'destroy', {
          role: 'role1',
          deletedAt: new Date(),
        });

        const deleted = await RoleService.delete(fakeId);
        expect(deleted?.role).to.equal('role1');
        expect(deleted).to.haveOwnProperty('deletedAt');
      } catch (error: any) {
        expect(error).to.be.null;
      }
    });
  });
});
