import { SinonStatic } from 'sinon';

export const fakeMethod = <T>(
  sinon: SinonStatic,
  object: Record<string, any>,
  method: string,
  result: Array<T> | Record<string, any> | null,
  fakeCallback?: Function
): void => {
  const fake = sinon.fake.returns(result);

  sinon.replace(object, method, fakeCallback || fake);
};
