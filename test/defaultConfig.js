const assert = require('assert');
const defaultConfig = require('../config/default');
describe('config: default', () => {
  describe('target.sortFn', () => {
    it ('returns -1 if chamber is senate', () => {
      const chamber = 'senate'
      console.log(defaultConfig.target.sortFn({ chamber }))
      assert(defaultConfig.target.sortFn({ chamber }) === -1)
    });

    it ('returns 1 if chamber is not senate', () => {
      const chamber = ''
      assert(defaultConfig.target.sortFn({ chamber }) === 1)
    });
  });
});
