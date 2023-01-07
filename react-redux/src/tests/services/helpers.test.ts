import { capitalize } from 'services/helpers';

describe('capitalize', () => {
  test('EmptyString_EmptyString', () => {
    expect(capitalize('')).toStrictEqual('');
  });
  test('hello_Hello', () => {
    expect(capitalize('hello!')).toStrictEqual('Hello!');
  });
  test('SpecialSymbol_SpecialSymbol', () => {
    expect(capitalize('!')).toStrictEqual('!');
  });
});
