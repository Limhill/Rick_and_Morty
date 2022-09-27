import { capitalize } from 'services/helpers';

describe('test helpers functions', () => {
  test('test capitalize function', () => {
    expect(capitalize('')).toStrictEqual('');
    expect(capitalize('hello!')).toStrictEqual('Hello!');
    expect(capitalize('!')).toStrictEqual('!');
  });
});
