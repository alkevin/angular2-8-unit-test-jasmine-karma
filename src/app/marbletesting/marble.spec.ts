import { cold, hot } from 'jasmine-marbles';
import { throwError, of } from 'rxjs';

describe('Marbles', () => {
  it('should underatand marble diagram', () => {
    const source = cold('--');
    // - 10ms
    const expected = cold('--');
    expect(source).toBeObservable(expected);
  });

  it('should support basic string values', () => {
    const source = cold('-a-|');
    const expected = cold('-a-|');
    // | completeion of observable , can have strings
    expect(source).toBeObservable(expected);
  });

  it('should replace to numbers', () => {
    const source = cold('-a-|', { a: 1 });
    const expected = cold('-a-|', { a: 1 });
    // a is param
    expect(source).toBeObservable(expected);
  });

  it('should support key value pair', () => {
    const source = cold('-a-|', { a: { key: 'value' } });
    const expected = cold('-a-|', { a: { key: 'value' } });
    // a can also be param of key value pair
    expect(source).toBeObservable(expected);
  });

  it('should support basic errors', () => {
    const source = cold('-a-#');
    const expected = cold('-a-#');
    // # is error
    expect(source).toBeObservable(expected);
  });

  it('should support custom errors', () => {
    const source = cold('--#', null, new Error('Custom Message!'));
    const expected = cold('--#', null, new Error('Custom Message!'));
    // # is error and can be passed as third param
    expect(source).toBeObservable(expected);
  });

  it('lets check for actual error', () => {
    const source = throwError(new Error('Hi'));
    const expected = cold('#', null, new Error('Hi'));
    expect(source).toBeObservable(expected);
  });

  it('should support multiple emmision', () => {
    const source = of(1, 2, 3);
    const expected = cold('(abc|)', { a: 1, b: 2, c: 3 });
    expect(source).toBeObservable(expected);
  });

  it('should support hot observable', () => {
    const source = hot('-^a-|', { a: 5 });
    const expected = hot('-^a-|', { a: 5 });
    expect(source).toBeObservable(expected);
  });

  it('should support testing subscriptions', () => {
    const source = hot('-a-^b---c-|');
    const expected = cold('-b---c-|');
    expect(source).toBeObservable(expected);
  });
});
