import {Services} from './services';

describe('services', function() {
  let services;

  beforeEach(function() {
    services = new Services();
  });

  describe('pluck()', function() {
    it('should return an empty array', function() {
      expect(services.pluck()).toEqual([]);
    });

    it('should return only the specified properties', function() {
      expect(services.pluck({a: 1}, 'a')).toEqual([1]);
    });
  });
});
