import { greet } from './myFunctions';

describe('My Functions', () => {
  it('should greet 🙋‍', () => {
    const expectedName = 'Suren';
    const result = greet(expectedName);
    expect(result).toContain(expectedName);
  });
});
