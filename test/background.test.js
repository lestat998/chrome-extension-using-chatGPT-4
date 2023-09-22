// test/background.test.js
require('../src/background/background.js');

test('listeners are added on install and message', () => {
  expect(chrome.runtime.onInstalled.addListener).toHaveBeenCalled();
  expect(chrome.runtime.onMessage.addListener).toHaveBeenCalled();
});
