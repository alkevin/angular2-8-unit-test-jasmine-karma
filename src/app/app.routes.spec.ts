import { routes } from './app-routing.module';

describe('App Routes', () => {
  it('should contain all specified routes', () => {
    expect(routes.map(route => route.path)).toEqual([
      '',
      'posts',
      'users', //more routes go here
      '**'
    ]);
  });
});
